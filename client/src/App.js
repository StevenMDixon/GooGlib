import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LoginPage, BooksPage } from "./pages"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={LoginPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
