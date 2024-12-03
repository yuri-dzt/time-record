import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./middleware/ProtectedRoute";
import RegisterPoint from "./pages/RegisterPoint/RegisterPoint";
import "./App.css";
import Login from "./pages/Login/login";
import History from "./pages/History/History";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute>
              <RegisterPoint />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </Router>
  );
};

export default App;
