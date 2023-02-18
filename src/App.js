import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";


import UserContext from "./Context/UserContext";
import useFindUser from "./Hooks/useFindUser";

import PublicRoutes from "./Routes/PublicRoutes";
import PrivateRoutes from "./Routes/PrivateRoutes";

import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";

// import { useState } from "react";


function App() {
  const [user, setUser, loading] = useFindUser();

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      <div>
        
        <Routes>
          <Route element={<PublicRoutes />}>
          
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotPassword" element={<ForgotPassword />} />
            <Route path="/passwordReset" element={<ResetPassword />} />
          </Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
