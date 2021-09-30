import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import { Container } from "@mui/material";
import { useState } from "react";
import { Box } from "@mui/system";

import Profile from "../components/Profile";
import PostForm from "../components/PostForm";

import PostList from "../components/PostsList";
var axios = require("axios").default;

const Home = () => {
  const [games, setGames] = React.useState([]);
  React.useEffect(() => {
    let response = [];
    var options = {
      method: "GET",
      url: "https://whatoplay.p.rapidapi.com/platform",
      params: { platform: "pc", count: "10" },
      headers: {
        "x-rapidapi-host": "whatoplay.p.rapidapi.com",
        "x-rapidapi-key": "4ee5b59d12msh903605515e7a564p1a6d32jsnd4cc21b6c460",
      },
    };
    axios
      .request(options)
      .then(function ({ data }) {
        const pcDataArray = data.pc.data;
        for (var i = 0; i < pcDataArray.length; i++) {
          console.log(pcDataArray[0].game_name.boxart);
          var gameName = pcDataArray[i].game_name;
          response.push({ gameName });
        }
        setGames(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
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
            height: "1000px",
            width: "350px",
            top: "10px",
            marginTop: "30px",
          }}
        >
          <div stlye={{ marginLeft: "20px" }}>
            <h1>Popular Games:</h1>
            {games.map((game, index) => (
              <div key={index}>
                <h2>{game.gameName}</h2>
                <img src={game.gameName.boxart}></img>
              </div>
            ))}
          </div>
        </div>
      </Box>
    </main>
  );
};

export default Home;
