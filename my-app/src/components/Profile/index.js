import React from "react";
import Avatar from "@mui/material/Avatar";
import blankProfile from "./blankprofile.png";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Badge } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { IconButton } from "@mui/material";

import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export default function Profile() {
  const { loading, data, error } = useQuery(QUERY_ME);
  React.useEffect(() => console.log(data || error), [data, loading, error]);

  return (
    <>
      <div
        style={{ border: "1px solid", marginTop: "30px", borderRadius: "25px" }}
      >
        <Container fixed>
          <Box
            style={{
              width: "400px",
              height: "600px",
              paddingTop: "10px",
            }}
          >
            <div>
              <Avatar
                sx={{ width: "400px", height: "300px" }}
                variant="square"
                src={blankProfile}
              >
                N
              </Avatar>
            </div>
            <div>
              <h1 style={{ fontSize: "60px" }}>@{data?.me.username}</h1>
            </div>
            <div style={{ borderBottom: "1px solid" }}>
              <h2>
                Name: {data?.me.firstName} {data?.me.lastName}
              </h2>
            </div>
            <div>
              <Box>
                <IconButton>
                  <GroupIcon sx={{ fontSize: 60, fill: "white" }} />
                  10 Friends
                </IconButton>
              </Box>
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}
