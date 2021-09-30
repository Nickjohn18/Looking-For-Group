import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";
import Button from "@mui/material/Button";

const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};

const PostForm = () => {
  const { values, onChange, onSubmit } = useForm(createPostCallBack, {
    body: "",
  });

  const [createPost, { error }] = useMutation(ADD_POST, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: QUERY_POSTS,
      });
      data.posts = [result.data.posts, ...data.posts];
      proxy.writeQuery({
        query: QUERY_POSTS,
        data: {
          posts: [result.data.posts, ...data.posts],
        },
      });
      values.postText = "";
    },
    onError(err) {
      return err;
    },
  });

  function createPostCallBack() {
    createPost();
  }

  return (
    <div>
      <div style={{ width: 700 }}>
        <form onSubmit={onSubmit}>
          <textarea
            name="postText"
            placeholder="Looking for gamers..."
            value={values.postText}
            className="form-input col-12 col-md-9"
            onChange={onChange}
            style={{
              width: "500px",
              height: "70px",
              marginLeft: "98px",
              borderColor: "transparent",
              outline: "none",
              border: "none",
            }}
          ></textarea>
          <div style={{ marginLeft: "300px" }}>
            <Button
              variant="contained"
              size="medium"
              type="submit"
              style={{ Top: "40px" }}
            >
              SHARE
            </Button>
          </div>
        </form>
        {error && (
          <div>
            <ul>{/* <li>{error.graphQLErrors[0].message}</li> */}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostForm;
