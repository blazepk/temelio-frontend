import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
