import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./NavBar.css";

const Menu = styled.nav`
  position: fixed;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  border-bottom: solid 1px #e8e8e8;
  overflow: auto;
  box-shadow: 0 0 30px #f3f1f1;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuLogo = styled.div`
  width: 150px;
  float: left;

  cursor: pointer;
`;

const Logo = styled.div`
  display: inline-block;
  font-size: 20px;
  padding: 19px 20px;
`;

const MenuContainer = styled.div``;

const RightMenu = styled.ul`
  display: flex;
`;

const Item = styled.li`
  font-size: 20px;
  width: 80px;
  height: 35px;

  text-align: center;
  list-style: none;
  margin-right: 30px;
  cursor: pointer;

  :hover {
    border-bottom: 2px solid #3498db;
  }
`;

function Nav() {
  const [ScrollY, setScrollY] = useState(0);

  const handleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
  };

  const handleAbout = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
    setScrollY(900);
  };

  const handleSkill = () => {
    window.scrollTo({
      top: 1800,
      behavior: "smooth",
    });
    setScrollY(1800);
  };

  const handleProject = () => {
    window.scrollTo({
      top: 3200,
      behavior: "smooth",
    });
    setScrollY(3200);
  };

  return (
    <Menu>
      <MenuLogo>
        <Logo onClick={handleHome}>Logo</Logo>
      </MenuLogo>
      <MenuContainer>
        <RightMenu>
          <Item onClick={handleHome}>Home</Item>
          <Item onClick={handleAbout}>About</Item>
          <Item onClick={handleSkill}>Skill</Item>
          <Item onClick={handleProject}>Project</Item>
        </RightMenu>
      </MenuContainer>
    </Menu>
  );
}

export default Nav;
