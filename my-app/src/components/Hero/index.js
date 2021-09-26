import * as React from "react";
import { Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

import backgroundImage from "./Gamingimg.jpg";

export default function ProductHero() {
  return (
    <div>
      <div>
        <img
          src={backgroundImage}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        ></img>
        <Typography
          color="#eeeeee"
          align="center"
          variant="h2"
          marked="center"
          style={{ position: "absolute", bottom: "700px", left: "800px" }}
        >
          Welcome To LFG!
        </Typography>
        <Typography
          color="#eeeeee"
          align="center"
          variant="h4"
          sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
          style={{ position: "absolute", bottom: "200px", left: "650px" }}
        >
          Want to look for other gamers? We got you!
        </Typography>
        <Button
          variant="contained"
          size="large"
          component="a"
          href="/premium-themes/onepirate/sign-up/"
          sx={{ minWidth: 200 }}
          style={{ position: "absolute", bottom: "100px", left: "900px" }}
        >
          <Link to="/signup" style={{ textDecoration: "none", color: "white" }}>
            Register Now!
          </Link>
        </Button>
      </div>
    </div>
  );
}
