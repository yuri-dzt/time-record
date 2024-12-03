import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{ padding: "10px", backgroundColor: "#007bff", color: "white" }}
    >
      <nav>
        <Link to="/" style={{ marginRight: "10px", color: "white" }}>
          Home
        </Link>
        <Link to="/register" style={{ marginRight: "10px", color: "white" }}>
          Registrar Ponto
        </Link>
        <Link to="/login" style={{ color: "white" }}>
          Login
        </Link>
      </nav>
    </header>
  );
};

export { Header };
