import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Last = styled.footer`
  height: 15vh;
  background-color: #222222;
  color: white;
  text-align: center;
  font-size: 20px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

function Footer() {
  return (
    <Last>
      <Text>
        <i
          className="fab fa-github"
          onClick={() => window.open(["https://github.com/Jaeki-Kwon"])}
          style={{
            fontSize: "60px",
            marginTop: "25px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        ></i>
        <span style={{ marginBottom: "10px" }}>
          © 2021. Jaeki Kwon. All rights reserved.
        </span>
      </Text>
    </Last>
  );
}

export default Footer;
