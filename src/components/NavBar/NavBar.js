import React, { useState } from "react";
import styled from "styled-components";
import "./NavBar.css";
import $ from "jquery";

const Menu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  border-bottom: solid 1px #e8e8e8;
  /* overflow: auto; */
  box-shadow: 0 0 30px #f3f1f1;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuToggle = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 70px;
  max-height: 15.75rem;
  padding-left: 2rem;
  background-color: #fff;
  @media screen and (min-width: 550px) {
    display: none;
  }
`;

const MenuLogo = styled.div`
  width: 150px;
  float: left;
  margin-left: 10px;
  cursor: pointer;
`;

const Logo = styled.div`
  display: inline-block;
  color: #52bcff;
  font-size: 22px;
  font-weight: bold;
  padding: 19px 20px;
`;

const MenuContainer = styled.div``;

const RightMenu = styled.ul`
  display: flex;
`;

const MobileItem = styled.div`
  margin-right: 25px;
  @media screen and (min-width: 550px) {
    display: none;
  }
`;
const WebItem = styled.div`
  display: flex;
  @media screen and (max-width: 550px) {
    display: none;
  }
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

function Nav(props) {
  const [ScrollY, setScrollY] = useState(0);

  const handleLogo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
  };

  const handleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
    setisToggled(!isToggled);
  };

  const handleAbout = () => {
    if (matchMedia("screen and (max-width: 500px)").matches) {
      window.scrollTo({
        top: $("#aboutHeight").offset().top,
        behavior: "smooth",
      });
      setScrollY($("#aboutHeight").offset().top);
      setisToggled(!isToggled);
    } else {
      window.scrollTo({
        top: $("#aboutHeight").offset().top,
        behavior: "smooth",
      });
      setScrollY($("#aboutHeight").offset().top);
    }
  };

  const handleSkill = () => {
    if (matchMedia("screen and (max-width: 500px)").matches) {
      window.scrollTo({
        top: $("#skillHeight").offset().top,
        behavior: "smooth",
      });
      setScrollY($("#skillHeight").offset().top);
      setisToggled(!isToggled);
    } else {
      window.scrollTo({
        top: $("#skillHeight").offset().top,
        behavior: "smooth",
      });
      setScrollY($("#skillHeight").offset().top);
    }
  };

  const handleProject = () => {
    if (matchMedia("screen and (max-width: 500px)").matches) {
      window.scrollTo({
        top: $("#projectHeight").offset().top,
        behavior: "smooth",
      });
      setScrollY($("#projectHeight").offset().top);
      setisToggled(!isToggled);
    } else {
      window.scrollTo({
        top: $("#projectHeight").offset().top,
        behavior: "smooth",
      });
      setScrollY($("#projectHeight").offset().top);
    }
  };

  const [isToggled, setisToggled] = useState(false);

  const handleToggle = () => {
    console.log("Click!!");
    setisToggled(!isToggled);
  };

  return (
    <>
      <Menu>
        <MenuLogo>
          <Logo onClick={handleLogo}>Portfolio</Logo>
        </MenuLogo>
        <MenuContainer>
          <WebItem>
            <Item onClick={handleHome}>Home</Item>
            <Item id="AboutBtn" onClick={handleAbout}>
              About
            </Item>
            <Item id="SkillBtn" onClick={handleSkill}>
              Skill
            </Item>
            <Item onClick={handleProject}>Project</Item>
          </WebItem>
          <MobileItem>
            <i
              onClick={handleToggle}
              className="fas fa-bars"
              style={{ fontSize: "40px", color: "gray" }}
            ></i>
          </MobileItem>
        </MenuContainer>
      </Menu>
      {isToggled ? (
        <MenuToggle>
          <Item style={{ marginBottom: "1rem" }} onClick={handleHome}>
            Home
          </Item>
          <Item style={{ marginBottom: "1rem" }} onClick={handleAbout}>
            About
          </Item>
          <Item style={{ marginBottom: "1rem" }} onClick={handleSkill}>
            Skill
          </Item>
          <Item style={{ marginBottom: "1rem" }} onClick={handleProject}>
            Project
          </Item>
        </MenuToggle>
      ) : (
        <></>
      )}
    </>
  );
}

export default Nav;
