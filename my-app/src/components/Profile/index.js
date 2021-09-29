import React from "react";
import Avatar from "@mui/material/Avatar";
import blankProfile from "./blankprofile.png";
import { Typography } from "@mui/material";

import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export default function Profile() {
  const { loading, data, error } = useQuery(QUERY_ME);
  React.useEffect(() => console.log(data || error), [data, loading, error]);

  return (
    <>
      <div>
        <div>
          <Typography variant="h1">{data?.me.username}</Typography>
          <Avatar
            alt="Remy Sharp"
            src={blankProfile}
            sx={{ width: 200, height: 200 }}
          />
        </div>
      </div>
    </>
  );
}
