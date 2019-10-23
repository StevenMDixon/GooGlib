import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import { PrivateRoute } from "./utils/protectedRoute";
import { LoginPage, BooksPage, LibraryPage } from "./pages";
import Banner from "./components/banner";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      redirectTo: null,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    axios.get("/user").then(response => {
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");
        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          redirectTo: "/Books"
        }, 
);
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  };

  logOut = () => {
    axios.post("/user/logout").then(response => {
      console.log(response);
      this.setState({
        loggedIn: false,
        username: null,
        redirectTo: "/login"
      });
    });
  }

  updateUser = newState => {
    this.setState(newState, () => console.log(this.state));
  };

  render() {
    return (
      <Router>
      <div className="App">
        <Banner 
        userName={this.state.username} 
        loggedIn={this.state.loggedIn}
        logOut={this.logOut}
        />
        { this.state.redirectTo ? <Redirect to={{ pathname: this.state.redirectTo }} /> : ""}
        <Switch>
          <Route
            exact
            path="/"
            component={() => <LoginPage updateUser={this.updateUser} />}
          />
          <PrivateRoute exact path="/library" loggedIn={this.state.loggedIn}>
            <LibraryPage />
          </PrivateRoute>
          <PrivateRoute exact path="/books" loggedIn={this.state.loggedIn}>
            <BooksPage />
          </PrivateRoute>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
