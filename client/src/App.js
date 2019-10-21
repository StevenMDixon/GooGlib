import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PrivateRoute } from "./utils/protectedRoute";
import { LoginPage, BooksPage, LibraryPage } from "./pages";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
      redirectTo: null
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  };

  updateUser = newState => {
    this.setState(newState, () => console.log(this.state));
  };

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.redirectTo ? (
            <Redirect to={{ pathname: this.state.redirectTo }} />
          ) : (
            ""
          )}
          <Switch>
            <Route
              exact
              path="/"
              component={() => <LoginPage updateUser={this.updateUser} />}
            />
            <PrivateRoute path="/library" loggedIn={this.state.loggedIn}>
              <LibraryPage />
            </PrivateRoute>
            <PrivateRoute path="/books" loggedIn={this.state.loggedIn}>
              <BooksPage />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
