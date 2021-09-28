import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import { Container } from "@mui/material";
import QUERY_USER from "../utils/queries";
import { useQuery } from "@apollo/react-hooks";
import axios from "axios";
import { useState, useEffect } from "react";
import { Box, display } from "@mui/system";

import Profile from "../components/Profile";
import PostForm from "../components/PostForm";
import Games from "../components/API";
import PostCard from "../components/PostCard";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const { users, setUsers } = useState({});

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/graphql")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
          <h1>Name</h1>
          <Profile />
          <Container style={{ backgroundColor: "" }}>
            <Box>
              <h3>TAGS</h3>
              <Stack direction="row" spacing={1}>
                <Chip icon={<FaceIcon />} label="With Icon" />
                <Chip
                  icon={<FaceIcon />}
                  label="With Icon"
                  variant="outlined"
                />
                <Chip icon={<FaceIcon />} label="With Icon" />
              </Stack>
              <h3>Interest</h3>
              <h3>Friends</h3>
              <h3>Games</h3>
              <h3>Groups</h3>
            </Box>
          </Container>
        </div>
      </Box>
      <Box
        sx={{
          height: 1500,
          marginTop: "50px",
          borderRight: "solid 1px",
          borderLeft: "solid 1px",
        }}
      >
        <div>
          <PostForm />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <PostCard />
        </div>
      </Box>
      <Box sx={{ height: 1100, width: 300 }}>
        <div style={{ position: "fixed" }}>
          <h1>Games go here</h1>
          <Games />
        </div>
      </Box>
    </main>
  );
};

export default Home;
