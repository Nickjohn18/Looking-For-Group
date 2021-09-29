import * as React from "react";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import moment from "moment";
import CommentForm from "../CommentForm/index";
import Button from "@mui/material/Button";
import AddCommentIcon from "@mui/icons-material/AddComment";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [openComment, setcommentOpen] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log("Props", props);
  console.log(props.postText);
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
        <h1>@{props.username}</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="body2" color="white">
          {props.postText}
        </Typography>
      </div>
      <CardActions disableSpacing>
        <p>{moment(props.createdAt).fromNow()}</p>
        <IconButton
          aria-label="add to favorites"
          style={{ marginLeft: "350px" }}
        >
          <FavoriteIcon style={{ fill: "red" }} />
        </IconButton>
        {openComment && <CommentForm />}
        <AddCommentIcon
          onClick={() => {
            setcommentOpen(!openComment);
          }}
        />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Box>
  );
}
