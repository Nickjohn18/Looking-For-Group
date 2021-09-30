import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_POST } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";
import { Button } from "@mui/material";
import { DELETE_COMMENT } from "../../utils/mutations";

function DeleteButton({ postId, commentId, callback }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const mutation = postId ? DELETE_COMMENT : DELETE_POST;

  const [deletePostOrComment] = useMutation(mutation, {
    update(proxy) {
      setConfirmOpen(false);
      if (!postId) {
        const data = proxy.readQuery({
          query: QUERY_POSTS,
        });
        data.posts = data.posts.filter((p) => p.id !== postId);
        proxy.writeQuery({ query: QUERY_POSTS, data });
      }
      if (callback) callback();
    },
    variables: {
      postId,
    },
  });
  return (
    <>
      <div content={postId ? "Delete Comment" : "Delete Post"}>
        <Button
          as="div"
          color="red"
          floated="right"
          onClick={() => setConfirmOpen(true)}
        >
          <div name="trash" style={{ margin: 0 }} />
        </Button>
      </div>
      <div
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={deletePostOrComment}
      />
    </>
  );
}

export default DeleteButton;
