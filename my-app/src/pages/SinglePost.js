import React from "react";

import CardActions from "@mui/material/CardActions";

import { useQuery } from "@apollo/react-hooks";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Container } from "@mui/material";
import Profile from "../components/Profile";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import moment from "moment";
import Avatar from "@mui/material/Avatar";
import blankProfile from "../components/Profile/blankprofile.png";
import GroupIcon from "@mui/icons-material/Group";
import AddCommentIcon from "@mui/icons-material/AddComment";
import { makeStyles } from "@material-ui/core/styles";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { QUERY_POST } from "../utils/queries";

import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";
import { useState } from "react";

export default function SinglePost(props) {
  const postId = props.match.params.postId;
  console.log(postId);

  const [comment, setComment] = useState();
  const { data: { post } = {} } = useQuery(QUERY_POST, {
    variables: {
      postId,
    },
  });
  const [submitComment] = useMutation(ADD_COMMENT, {
    update() {
      setComment("");
    },
    variables: {
      postId,
      commentText: comment,
    },
  });

  function deleteButtonCallBack() {
    props.history.push("/home");
  }

  let postMarkup;
  if (!post) {
    postMarkup = <p>Loading post…</p>;
  } else {
    const { id, postText, createdAt, username, comments } = post;

    postMarkup = (
      <main
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
          backgroundColor: "#78909c",
          color: "white",
          paddingTop: "50px",
          paddingBottom: "50px",
          display: "flex",
        }}
      >
        <div style={{ paddingBottom: "60px", paddingLeft: "70px" }}>
          <div
            style={{
              border: "1px solid",
              marginTop: "30px",
              borderRadius: "25px",
              marginLeft: "40px",
            }}
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
                  <h1 style={{ fontSize: "60px" }}>@{username}</h1>
                </div>
                <div style={{ borderBottom: "1px solid" }}>
                  <h2></h2>
                </div>
                <div>
                  <Box style={{ display: "flex" }}>
                    <Button
                      style={{
                        color: "white",
                        fontSize: "30px",
                        paddingTop: "40px",
                      }}
                    >
                      Add Friend
                    </Button>
                    <div style={{ paddingTop: "25px", paddingLeft: "40px" }}>
                      <Badge badgeContent={1000} overlap="circular">
                        <GroupIcon sx={{ fontSize: 60, fill: "white" }} />
                      </Badge>
                    </div>
                  </Box>
                </div>
              </Box>
            </Container>
          </div>
        </div>
        <div style={{ marginLeft: "300px" }}>
          <Box
            style={{
              width: "600px",
              color: "white",
              borderBottom: "solid 2px",
              marginBottom: "50px",
            }}
          >
            <div>
              <h1>@{username}</h1>
            </div>
            <div style={{ textAlign: "left" }}>
              <Typography variant="body2" color="white">
                {postText}
              </Typography>
            </div>
            <CardActions disableSpacing>
              <p>{moment(createdAt).format("DD/MM/YYYY")}</p>
              <IconButton
                aria-label="add to favorites"
                style={{ marginLeft: "400px" }}
              >
                <FavoriteIcon style={{ fill: "red" }} />
              </IconButton>
            </CardActions>
          </Box>
          <div>
            <h3 style={{ marginLeft: "200px" }}>LEAVE A COMMENT</h3>
            <form>
              <textarea
                placeholder="Leave a comment to this post..."
                value={comment}
                style={{ width: "600px", height: "100px" }}
                onChange={(event) => setComment(event.target.value)}
              ></textarea>
            </form>
            <Button
              variant="contained"
              size="medium"
              type="submit"
              style={{ Top: "40px" }}
              onClick={submitComment}
            >
              SHARE
            </Button>
          </div>
          {comments.map((comment) => (
            <div
              key={comment.id}
              style={{ paddingTop: "30px", borderBottom: "1px solid" }}
            >
              <h3>@{comment.username}</h3>
              <p>{comment.commentText}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  return postMarkup;
}
