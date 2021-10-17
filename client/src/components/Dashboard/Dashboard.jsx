import { Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Login from "../Login/Login";
import AdminControl from "../AdminControl/AdminControl";
import { AuthUser, UpdateToken } from "../../api/Api";

const Dashboard = () => {
  // Use state
  const [auth, setAuth] = useState(false);
  // Lifted states
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  // Initial auth check
  const AuthCheck = async () => {
    const response = await AuthUser();
    setAuth(response);
  };
  // Use effect
  useEffect(() => {
    AuthCheck();
  }, []);
  // Handlers
  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };
  const handleLogin = async () => {
    // Validate if there is token
    if (!token) return;
    // Update session token at server side
    const result = await UpdateToken(token);
    // Validate POST req result
    if (!result) {
      setMessage("Something went wrong! Try again!");
      return;
    }
    // Auth user
    const auth = await AuthUser();
    // Validate auth
    if (!auth) {
      setMessage("Invalid Auth Token!");
      return;
    } else {
      // Auth success
      setAuth(true);
    }
  };

  if (!auth) {
    return (
      <Login
        token={token}
        message={message}
        handleTokenChange={handleTokenChange}
        handleLogin={handleLogin}
      />
    );
  }
  return <AdminControl />;
};

export default Dashboard;
