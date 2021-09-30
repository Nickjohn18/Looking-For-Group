import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import { Container } from "@mui/material";

import { Box } from "@mui/system";

import Profile from "../components/Profile";
import PostForm from "../components/PostForm";
import Games from "../components/API";

import PostList from "../components/PostsList";

const Home = () => {
  return (
    <main
      style={{
        marginLeft: "0%",
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#78909c",
        color: "white",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
      }}
    >
      <Box sx={{ height: 800, width: 400 }}>
        <div style={{ position: "fixed" }}>
          <Profile />
          <Container style={{ backgroundColor: "" }}>
            <Box>
              {/* <h3>Interest</h3>
              <h3>Friends</h3>
              <h3>Games</h3>
              <h3>Groups</h3> */}
            </Box>
          </Container>
        </div>
      </Box>
      <div
        sx={{
          height: 1500,
          marginTop: "50px",
          borderRight: "solid 1px",
          borderLeft: "solid 1px",
        }}
        style={{ borderRight: "solid 1px", borderLeft: "solid 1px" }}
      >
        <div style={{ marginTop: "30px" }}>
          <PostForm />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PostList />
        </div>
      </div>
      <Box sx={{ height: 1100, width: 300 }}>
        <div
          style={{
            position: "sticky",
            border: "1px solid",
            borderRadius: "25px",
            height: "800px",
            width: "350px",
            top: "10px",
            marginTop: "30px",
          }}
        >
          <h1>Games go here</h1>
          <Games />
        </div>
      </Box>
    </main>
  );
};

export default Home;
