import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import { Container } from "@mui/material";

import Profile from "../components/Profile";
import PostForm from "../components/PostForm";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  return (
    <main style={{ marginLeft: "10%" }}>
      <Grid container spacing={9}>
        <Grid item xs={3}>
          <div style={{ borderRight: "solid" }}>
            <h1>FIRST LAST NAME</h1>
            <Profile />
            <Container>
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
              <h3>Friends</h3>
            </Container>
          </div>
        </Grid>
        <Grid item xs={6}>
          <PostForm />
          <Item>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
            <h1>TIMELINE CONTENT</h1>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;
