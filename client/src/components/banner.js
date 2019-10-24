import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";

function Banner({ loggedIn, userName, logOut }) {
  console.log(userName);
  return (
    <div className="banner-wrapper">
      <div className="banner-logo">
        <p>Googlib</p>

        {loggedIn ? (
          <div className="banner-links">
            <span>
              <Link to="/books">Books</Link>
            </span>
            <span>
              <Link to="/library">My Library</Link>
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="user-info">
        {userName ? (
          <h6 className="banner-welcome">Welcome: {userName}</h6>
        ) : (
          ""
        )}
      </div>
      <div className="logout-wrapper">
        {loggedIn ? (
          <a href="#" onClick={logOut}>
            Logout
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Banner;
