import gql from "graphql-tag";

export const QUERY_POSTS = gql`
  {
    posts {
      id
      postText
      createdAt
      username
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      createdAt
      username
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;

const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      firstName
      lastName
      email
      posts {
        _id
        postText
        createdAt
        commentCount
      }
    }
  }
`;
export default QUERY_USER;

export const QUERY_ME = gql`
  {
    me {
      _id
      fistName
      lastName
      username
      email
      posts {
        _id
        postText
        createdAt
        commentCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
    }
  }
`;
