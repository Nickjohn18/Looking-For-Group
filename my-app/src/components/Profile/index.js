import * as React from "react";
import Avatar from "@mui/material/Avatar";
import blankProfile from "./blankprofile.png";

export default function Profile() {
  return (
    <Avatar
      alt="Remy Sharp"
      src={blankProfile}
      sx={{ width: 200, height: 200 }}
    />
  );
}
