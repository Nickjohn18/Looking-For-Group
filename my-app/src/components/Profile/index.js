import * as React from "react";
import Avatar from "@mui/material/Avatar";
import blankProfile from "./blankprofile.png";
import { Typography } from "@mui/material";

import { QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";

export default function Profile() {
  // const { data } = useQuery(QUERY_USER);
  // let user;
  // if (data) {
  //   user = data.user;
  // }
  // const [state] = useStoreContext();

  // const user = state?.users || [];
  return (
    <>
      <div>
        <Typography>Name:</Typography>
      </div>
      <Avatar
        alt="Remy Sharp"
        src={blankProfile}
        sx={{ width: 200, height: 200 }}
      />
    </>
  );
}
