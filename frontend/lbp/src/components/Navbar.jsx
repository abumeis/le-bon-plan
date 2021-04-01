import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import Products from "../views/Products";
import Error404 from "../views/Error404";
import AddProduct from "../views/AddProduct";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Profile from "../views/Profile";
import styled from "styled-components";

const StyleNavBar = styled.div`
  color: #ff6e14;
`;

const StyleLink = styled.span`
  color: #fff;
  padding: 10px;
  font-family: "Rancho", cursive;
  font-weight: 400;
`;

class Navbar extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navbar navbar-expand-md navbar-light bg-dark">
          <StyleNavBar className="container-fluid">
            <Link className="navbar-brand" style={{ fontSize: "30px" }} to="/">
              <span style={{ color: "white", width: "20px" }}></span>
              <StyleLink>LBP</StyleLink>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to="/Home">
                    <StyleLink>Home</StyleLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/AddProduct">
                    <StyleLink>Add product</StyleLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Products">
                    <StyleLink>Products</StyleLink>
                  </Link>
                </li>

                <li class="nav-item">
                  <Link className="nav-link" to="/Profile">
                    <StyleLink>Profile</StyleLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Login">
                    <StyleLink>Login</StyleLink>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Signup">
                    <StyleLink>Sign up</StyleLink>
                  </Link>
                </li>
              </ul>
            </div>
          </StyleNavBar>
        </div>

        <Switch>
          <Route exact path="/" components={Home} />
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/AddProduct">
            <AddProduct />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Navbar;
