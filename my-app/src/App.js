import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Home from "./pages/Home";
import "./index.css";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Main from "./pages/Main";
import userProfile from "./pages/Profiles";
import SinglePost from "./pages/SinglePost";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header class="nav" />
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/home" component={Main} />
              <Route exact path="/profile" component={userProfile} />
              <Route exact path="/posts/:postId" component={SinglePost} />
            </Switch>
          </div>
          <Footer style={{ marginTop: "auto" }} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
