import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main
      style={{
        backgroundColor: "#78909c",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
      }}
    >
      <Container
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "60px",
          paddingBottom: "60px",
          paddingLeft: "260px",
        }}
      >
        <Box sx={{ bgcolor: "#78909c", width: 700, height: 700 }}>
          <h1
            style={{
              borderBottom: "solid",
              display: "inline-block",
            }}
          >
            SIGN UP
          </h1>
          <p>Please Fill Out Information Below*</p>
          <Box style={{ textAlign: "center", width: 500, marginLeft: "15%" }}>
            <form onSubmit={handleFormSubmit}>
              <p>Please Enter Your Name*</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "30px",
                }}
              >
                <input
                  className="form-input"
                  placeholder="First Name"
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  style={{ width: "43%", height: "50px" }}
                />
                <input
                  className="form-input"
                  placeholder="Last Name"
                  name="lastName"
                  type="lastName"
                  id="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  style={{ width: "43%", height: "50px" }}
                />
              </div>
              <div style={{ marginTop: "30px" }}>
                <p>Username*</p>
                <input
                  className="form-input"
                  placeholder="username"
                  name="username"
                  type="username"
                  id="username"
                  value={formState.username}
                  onChange={handleChange}
                  style={{ width: "100%", height: "50px" }}
                />
              </div>
              <div style={{ marginTop: "30px" }}>
                <p>Email*</p>
                <input
                  className="form-input"
                  placeholder="email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                  style={{ width: "100%", height: "50px" }}
                />
              </div>
              <div style={{ marginTop: "30px" }}>
                <p>Password*</p>

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
                  marginTop: "15px",
                  backgroundColor: "#1565c0",
                  border: "none",
                  display: "inline-block",
                  width: "50%",
                  height: "50px",
                  color: "white",
                }}
              >
                SIGN UP
              </button>
            </form>

            {error && <div>Signup failed</div>}
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Signup;
