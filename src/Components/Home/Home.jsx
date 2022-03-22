import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("User_Name")) {
        navigate("/calculator");
    }
  });

  return (
    <div>
      <div>
        <h1 className="title">Login Page</h1>
      </div>
      <div className="Home">
        <input
          type="text"
          className="userName"
          name="userName"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          className="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          to={userName && password ? "calculator" : "/"}
          className="loginLink"
          onClick={() => userName && password && sessionStorage.setItem("User_Name", userName)}
        >
          <div className="linkText">Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
