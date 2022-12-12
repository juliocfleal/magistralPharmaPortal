import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { IoLogoWhatsapp } from "react-icons/io";
import Logo from "./../assets/icons8-almofariz-e-pilão-80.png";
import LogoMagistral from "./../assets/logoMagistralSF.png";

const NavbarSup = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <>
            <h1 style={{color: "#25d366"}}>
            <span className="whatsApp" style={{fontSize: "1rem"}}>Entre em contato </span>
              <IoLogoWhatsapp />
            <span className="whatsApp">{" "} <span style={{fontSize: "0.8rem"}}>(35)</span> 99218-7024</span>
            </h1>
          </>
        </Container>
      </Navbar>
              
      <Navbar className="navbarColor"> 
      {/* <h1 className="logo"><h1>
        <img className="logoImg" src={Logo}/></h1>
       Magistral Pharma
       <h5 className="subfrase">Farmacia de manipulacao</h5>
       </h1> */}
       <h1 className="logo">

       <img className="logoImg" src={LogoMagistral}/>
       </h1>
       
       </Navbar>
    </>
  );
};

export default NavbarSup;
