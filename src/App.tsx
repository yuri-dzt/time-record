import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./middleware/ProtectedRoute";
import RegisterPoint from "./pages/RegisterPoint/RegisterPoint";
import "./App.css";
import Login from "./pages/Login/login";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <RegisterPoint />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
