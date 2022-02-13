import React, { useEffect, useState } from "react";
import jwt from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt(token);
      console.log(user);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setUser(user);
      }
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Welcome to Your Dashboard {user.name}</h1>
    </div>
  );
};

export default Dashboard;
