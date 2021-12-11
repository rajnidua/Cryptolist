import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          {/* <NavLink to="/abc" activeStyle>
            Search Crypto
          </NavLink> */}
          <NavLink to="/trendingCrypto" activeStyle>
            TRENDING
          </NavLink>

          <NavLink to="/" activeStyle>
            SEARCH
          </NavLink>
          <NavLink to="/allCryptos" activeStyle>
            ALL CRYPTOS
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
