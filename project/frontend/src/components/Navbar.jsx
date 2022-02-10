import React from "react";
import "../index.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbars = () => {
  return (
    <>
      <div className="nav-outer">
        <div className="navbars  ">
          {" "}
          <h5>
            <FontAwesomeIcon icon={faPhone} fontVariant="gold" /> 03104286698{" "}
          </h5>
        </div>
        <Navbar className=" navbar-inner text-center  ">
          <Container fluid>
            <Nav className=" nav-link ms-auto ">
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>

              <Link to={"/healthtips"}> Health Tips </Link>
              <Link to={"/Contactus"}> Contact us </Link>

              <Link to={"/medicine"}>Medicine</Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="navbar-img"></div>
      </div>
    </>
  );
};

export default Navbars;
