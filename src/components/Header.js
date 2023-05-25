import React, { useState } from "react";
import { styled } from "styled-components";
import { GiCrossMark, GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [nav, setnav] = useState(false);

  return (
    <>
      <Navbar>
        <Logo src="./images/logo.svg" alt=""></Logo>
        <Mid>
          <Link href="#modelS"> Model S</Link>
          <Link href="#modelX"> Model X</Link>
          <Link href="#model3"> Model 4</Link>
          <Link href="#modelY"> Model Y</Link>
        </Mid>
        <Right>
          <Link href="/">Shop</Link>
          <Div onClick={() => setnav(true)}></Div>
        </Right>
      </Navbar>
      <MenuBar show={nav}>
        <Cross>
          <GiCrossMark onClick={() => setnav(false)} />
        </Cross>
        <li>Existing Inventory</li>
        <li>Used Inventory</li>
        <li>Trade-In</li>
        <li>Demo Drive</li>
        <li>Insurance</li>
        <li>Fleet</li>
        <li>Cybertruck</li>
        <li>Roadster</li>
        <li>Semi</li>
        <li>Charging</li>
        <li>Utilities</li>
        <li>Carrers</li>
        <li>Events</li>
        <li>Support</li>
      </MenuBar>
    </>
  );
}

export default Header;
const Navbar = styled.div`
  position: fixed;
  color: white;
  font-size: 20px;
  top: 0px;
  left: 0px;
  right: 0px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  display: flex;
  min-height: 80px;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
`;
const Logo = styled.img`
  cursor: pointer;
  filter: invert();
`;
const Mid = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const Link = styled.a`
  margin: 10px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Div = styled(GiHamburgerMenu)`
  margin: 20px;
  size: 50px;
  cursor: pointer;
`;
const MenuBar = styled.div`
  background-color: white;
  z-index: 10000;
  padding: 10px;
  position: fixed;
  width: 300px;
  font-weight: bold;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 100vh;
  list-style: none;
  transition: 0.2s all ease-in-out;
  transform: ${(props) => (props.show ? `translateX(0%)` : `translateX(100%)`)};
  flex-direction: column;
  li {
    margin: 10px;
    border-bottom: 1px solid grey;
    cursor: pointer;
  }
`;
const Cross = styled.div`
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;
