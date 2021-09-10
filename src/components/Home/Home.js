import React from "react";
import styled from "styled-components";

const Main = styled.div`
  background-image: url("https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2356853556C27BD133");
  background-size: cover;
  background-repeat: no-repeat;
  /* min-width: 90vw;
  min-height: 100vh; */
  width: 100%;
  height: 100vh;
  /* margin-top: -20px; */
  padding-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: 0.7; */
  color: white;
`;

const Intro = styled.div`
  font-size: 50px;
  text-align: center;
`;

function Home() {
  return (
    <Main>
      <Intro>
        <h2>권재기의</h2>
        <h2>포트폴리오 입니다.</h2>
      </Intro>
    </Main>
  );
}

export default Home;
