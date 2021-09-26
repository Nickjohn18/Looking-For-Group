import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };
  return (
    <main
      style={{ marginLeft: "25%", marginBottom: "100px", marginTop: "50px" }}
    >
      <Container style={{ textAlign: "center", color: "white" }}>
        <Box sx={{ bgcolor: "#42a5f5", width: 700, height: 700 }}>
          <h1
            style={{
              paddingTop: "20px",
              borderBottom: "solid",
              display: "inline-block",
            }}
          >
            SIGN IN
          </h1>
          <p>
            Don't have an Account?{" "}
            <a href="/signup" style={{ color: "white" }}>
              Join Now!
            </a>
          </p>
          <Box style={{ textAlign: "center", width: 500, marginLeft: "15%" }}>
            <form onSubmit={handleFormSubmit}>
              <div style={{ marginTop: "50px" }}>
                <p style={{ marginRight: "90%", fontSize: "20px" }}>Email</p>
                <input
                  className="form-input"
                  placeholder="Enter Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  style={{ width: "100%", height: "50px" }}
                />
              </div>
              <div style={{ marginTop: "60px" }}>
                <p style={{ marginRight: "85%", fontSize: "20px" }}>Password</p>
                <input
                  className="form-input"
                  placeholder="Enter Your Password"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                  style={{ width: "100%", height: "50px" }}
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "#1565c0",
                  border: "none",
                  display: "inline-block",
                  width: "50%",
                  height: "50px",
                  marginTop: "10%",
                  color: "white",
                }}
              >
                SIGN IN
              </button>
            </form>
            {error && <div>Login failed</div>}
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Login;
