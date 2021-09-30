import React from "react";
import { Container, Grid, Box } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "gray" }}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.Secondary"
      >
        <Container maxWidth="md">
          <Grid container spacing={6}>
            <Grid item xs={13} sm={4}>
              <Box borderBottom={1} style={{ textAlign: "center" }}>
                About Us
              </Box>
              <div style={{ marginTop: "10px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} style={{ textAlign: "center" }}>
                Account
              </Box>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <div>Account</div>
                <div>Account</div>
                <div>Account</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} style={{ textAlign: "center" }}>
                Messages
              </Box>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                Leave a Message
              </div>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Looking For Gamers &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
