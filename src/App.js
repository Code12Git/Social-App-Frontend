import Navbar from "./Components/Navbar";
import React, { useContext } from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <>
                <Navbar />
                <Home />
              </>
            ) : (
              <Register />
            )
          }
        />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/profile/:username"
          element={
            <>
              {" "}
              <Navbar />
              <Profile />
            </>
          }
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
