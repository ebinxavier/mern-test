import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./Header.css";
import { isAuthenticated } from "../../utils/auth";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand">Navbar</div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {!isAuthenticated() && (
              <>
                <li className="nav-item ">
                  <NavLink
                    to="/login"
                    activeClassName="active-link"
                    className="nav-link"
                    href="#"
                  >
                    Login <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/signup"
                    activeClassName="active-link"
                    className="nav-link"
                  >
                    Sign up
                  </NavLink>
                </li>
              </>
            )}
            {isAuthenticated() && isAuthenticated().role === 0 && (
              <>
                <li className="nav-item ">
                  <a
                    activeClassName="active-link"
                    className="nav-link"
                    href="#"
                  >
                    Dashboard
                  </a>
                </li>
              </>
            )}
            {isAuthenticated() && isAuthenticated().role === 1 && (
              <>
                <li className="nav-item ">
                  <a
                    activeClassName="active-link"
                    className="nav-link"
                    href="#"
                  >
                    Dashboard
                  </a>
                </li>
              </>
            )}
          </ul>
          <div className="avatar-circle" onClick={() => setOpenMenu(!openMenu)}>
            <span className="initials">
              {isAuthenticated().username.charAt(0).toUpperCase()}
            </span>
          </div>

          {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
        </div>
      </nav>
    </>
  );
}

export default withRouter(Header);
