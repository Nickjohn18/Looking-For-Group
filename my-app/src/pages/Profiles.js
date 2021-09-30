import React from "react";
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import BlankProfile from "../components/Profile/blankprofile.png";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { CardActions } from "@mui/material";
import { Collapse } from "@mui/material";
import { CardContent } from "@mui/material";
import { Modal } from "@mui/material";
import { Backdrop } from "@mui/material";
import { Fade } from "@mui/material";
import { Link } from "react-router-dom";

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

const UserProfile = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [openComment, setcommentOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { loading, data, error } = useQuery(QUERY_ME);
  React.useEffect(() => console.log(data || error), [data, loading, error]);

  return (
    <main
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
        backgroundColor: "#78909c",
        color: "white",
        paddingTop: "5px",
        paddingBottom: "50px",
      }}
    >
      <Container fixed>
        <Box style={{ height: "550px" }}>
          <div style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "90px" }}>@{data?.me.username}</h1>
          </div>
          <div style={{ paddingLeft: "450px" }}>
            <Avatar src={BlankProfile} sx={{ width: 250, height: 250 }} />
          </div>
          <div>
            <h2 style={{ textAlign: "center", borderBottom: "1px solid" }}>
              {data?.me.firstName} {data?.me.lastName}
            </h2>
          </div>
        </Box>
        <Box style={{ textAlign: "center" }}>
          <div style={{ marginLeft: "250px" }}>
            {data?.me.posts.map((posts) => (
              <div style={{ textAlign: "center" }}>
                <Box
                  style={{
                    width: "600px",
                    color: "white",
                    borderBottom: "solid 2px",
                    marginBottom: "50px",
                  }}
                >
                  <div>
                    <h1>@{posts.username}</h1>
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <Typography variant="body2" color="white">
                      {posts.postText}
                    </Typography>
                  </div>

                  <CardActions disableSpacing>
                    <p></p>
                    <IconButton
                      aria-label="add to favorites"
                      style={{ marginLeft: "400px" }}
                    >
                      <FavoriteIcon style={{ fill: "red" }} />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <div>
                        <AddCommentIcon style={{ fill: "white" }} />
                      </div>
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <div
                        style={{ textAlign: "center", bottomMargin: "20px" }}
                      >
                        {posts.comments.map((comment) => (
                          <div style={{ borderTop: "1px solid" }}>
                            <h2>@{comment.username}</h2>
                            <p>{comment.commentText}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Collapse>
                </Box>
              </div>
            ))}
          </div>
        </Box>
      </Container>
    </main>
  );
};

export default UserProfile;
