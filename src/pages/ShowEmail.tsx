import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowEmail() {
  const [content, setContent] = useState("");
  const params = useParams();
  //   console.log("params", params);
  useEffect(() => {
    if (params.id) {
      const data = localStorage.getItem(params.id) || "";
      setContent(data);
    }
  }, []);
  return <div>{content}</div>;
}

export default ShowEmail;
