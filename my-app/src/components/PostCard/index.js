import React from "react";

import CardActions from "@mui/material/CardActions";

import { useQuery } from "@apollo/react-hooks";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Box } from "@mui/system";
import moment from "moment";

import AddCommentIcon from "@mui/icons-material/AddComment";
import { makeStyles } from "@material-ui/core/styles";
import { QUERY_POST, QUERY_POSTS } from "../../utils/queries";
import { Link } from "react-router-dom";

//
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

//

export default function PostCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [openComment, setcommentOpen] = React.useState(false);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const { loading, data, error } = useQuery(QUERY_POST);
  // const { loading, data, error } = useQuery(QUERY_POST, {
  //   variables: { id: postId },
  // });
  // React.useEffect(() => console.log(data || error), [data, loading, error]);
  const post = data?.post || {};

  console.log(props);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      style={{
        width: "600px",
        color: "white",
        borderBottom: "solid 2px",
        marginBottom: "50px",
      }}
    >
      <div>
        <h1 as={Link} to={`/profile/$`}>
          @{props.username}
        </h1>
      </div>
      <div style={{ textAlign: "left" }}>
        <Typography variant="body2" color="white">
          {props.postText}
        </Typography>
      </div>
      <CardActions disableSpacing>
        <p>{moment(props.createdAt).format("DD/MM/YYYY")}</p>
        <IconButton
          aria-label="add to favorites"
          style={{ marginLeft: "400px" }}
        >
          <FavoriteIcon style={{ fill: "red" }} />
        </IconButton>
        <IconButton as={Link} to={`/posts/${props._id}`}>
          <AddCommentIcon style={{ fill: "white" }} />
        </IconButton>
      </CardActions>
    </Box>
  );
}
