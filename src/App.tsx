import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddFoundation from "./pages/AddFoundation";
import Dashboard from "./pages/Dashboard";
import AddNonProfit from "./pages/AddNonProfit";
import DonateNonProfit from "./pages/DonateNonProfit";
import NonProfitsList from "./pages/NonProfitsList";
import Login from "./pages/Login";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./contexts/loginContext";

function App() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            !isLoggedIn ? (
              <Navigate to="/login" replace />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/add-foundation" element={<AddFoundation />} />
        <Route
          path="/dashboard"
          element={
            !isLoggedIn ? <Navigate to="/login" replace /> : <Dashboard />
          }
        >
          <Route path="add-nonprofit" element={<AddNonProfit />} />
          <Route path="donate-to-nonprofit" element={<DonateNonProfit />} />
          <Route path="list-nonprofits" element={<NonProfitsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
