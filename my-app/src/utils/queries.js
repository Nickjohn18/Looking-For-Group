import gql from "graphql-tag";

export const QUERY_POSTS = gql`
  query posts($username: String) {
    posts(username: $username) {
      _id
      postText
      createdAt
      username
      comments {
        _id
        createdAt
        username
        commentText
      }
    }
  }
`;

export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      firstName
      lastName
      email
      posts {
        _id
        postText
        createdAt
        username
      }
    }
  }
`;

export const QUERY_POST = gql`
  query post($postId: ID!) {
    post(_id: $postId) {
      _id
      postText
      createdAt
      username
      comments {
        _id
        createdAt
        username
        commentText
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
        comments {
          _id
          commentText
          createdAt
          username
        }
      }
    }
  }
`;
export default QUERY_USER;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      lastName
      username
      email
      posts {
        _id
        postText
        createdAt
        username
        comments {
          _id
          commentText
          createdAt
          username
        }
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      firstName
      lastName
      posts {
        _id
        postText
        createdAt
        username
      }
    }
  }
`;
