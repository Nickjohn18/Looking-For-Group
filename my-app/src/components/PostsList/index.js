import * as React from "react";
import { QUERY_POSTS } from "../../utils/queries";
import PostCard from "../PostCard";
import { useQuery } from "@apollo/client";

export default function PostsList() {
  const { data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];
  console.log(posts);
  return (
    <>
      <div>
        <div>
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}
