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
  const [searchInput, setSearchInput] = useState();
  /* const handleInputChange=(e)=>{
setSearchInput(e.target.value);

  } */
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
            <input
              name="searchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              size="lg"
              data-testid="input-element"
              placeholder="Search for a Cryptolist"
            />
            Search
          </NavLink>
          <NavLink to="/allCryptos" activeStyle>
            All Cryptos
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
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
