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
          <NavLink to="/" activeStyle>
            Search Crypto
          </NavLink>
          <NavLink to="/trendingCrypto" activeStyle>
            Trending
          </NavLink>

          <NavLink to="/filterCryptos" activeStyle>
            Search
          </NavLink>
          <NavLink to="/allCryptos" activeStyle>
            All Cryptos
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
