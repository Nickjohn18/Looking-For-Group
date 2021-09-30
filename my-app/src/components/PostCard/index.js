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
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles } from "@material-ui/core/styles";

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
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <div>
            <AddCommentIcon />
          </div>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div style={{ textAlign: "center", bottomMargin: "20px" }}>
            {/* {openComment && <CommentForm />} */}
            <Button
              variant="contained"
              onClick={() => {
                setcommentOpen(!openComment);
                handleOpen();
              }}
            >
              comment
            </Button>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  {openComment && <CommentForm />}
                </div>
              </Fade>
            </Modal>
          </div>
        </CardContent>
      </Collapse>
    </Box>
  );
}
