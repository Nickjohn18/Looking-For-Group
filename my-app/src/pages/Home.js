import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_POSTS } from "../utils/queries";
const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>HomeScreen</div>
      <div className="flex-row justify-space-between">
        {loggedIn && <div className="col-12 mb-3"></div>}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}></div>
        {loggedIn ? <div className="col-12 col-lg-3 mb-3"></div> : null}
      </div>
    </main>
  );
};

export default Home;
