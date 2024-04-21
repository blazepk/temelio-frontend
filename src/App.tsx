import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddFoundation from "./pages/AddFoundation";
import Dashboard from "./pages/Dashboard";
import AddNonProfit from "./pages/AddNonProfit";
import DonateNonProfit from "./pages/DonateNonProfit";
import NonProfitsList from "./pages/NonProfitsList";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <BrowserRouter>
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
