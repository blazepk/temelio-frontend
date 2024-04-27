import { useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";
import { toast } from "react-toastify";

function DonateNonProfit() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetcher({
      endpoint: "non-profits/list",
      method: "GET",
    })
      .then((res: any) => {
        console.log("response", res);
        setTableData(res.nonprofits);
      })
      .catch((err: any) => {
        console.log("err in fetching non profits", err);
      });
  }, []);

  console.log("tableData", tableData);

  const handleEmail = async (id: string) => {
    const response = await fetcher({
      endpoint: `non-profits/donate/${id}`,
      method: "GET",
    }).catch((err: any) => {
      console.log("err in fetching non profits", err);
    });

    if (!response.success) {
      toast.error("Unable to send email");
    } else {
      toast.success(response.message);
    }
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Sr.No.
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Send Email
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.length > 0 &&
            tableData.map((item: any, index) => {
              return (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.address}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEmail(item.id)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Send Email
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default DonateNonProfit;
