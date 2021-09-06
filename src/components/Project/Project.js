import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import TodayMongo from "../Modal/TodayMongo";

import todayILearnedMariaDB from "./img/today_i_learned.png";
import todayILearnedMongo from "./img/todayMongo.png";
import movieApp from "./img/movieApp.png";
import jsGame from "./img/jsgame.png";
import nomflix from "./img/nomflix.png";
import wetube from "./img/wetube.png";
import jsChrome from "./img/jsChrome.png";
import jsList from "./img/jsList.png";
import kakao from "./img/kakao.png";

const Article = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d809f;
`;

const ProjectForm = styled.div`
  max-width: 71.25rem;
  padding: 4rem 2rem;
  width: 70%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TitleIcon = styled.div`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  margin-top: 5.3rem;
  margin-right: 1rem;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;

const Projects = styled.div`
  margin-bottom: 25px;
  background-color: white;
  width: 350px;
  border-radius: 25px;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.45),
    30px 30px 40px rgba(118, 146, 180, 0.18);
  overflow: hidden;
  padding: 1.5rem;
`;

const ProjectsTitle = styled.div`
  margin-top: -20px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
`;

const ProjectsImge = styled.div``;

const ProjectsContent = styled.div`
  text-align: center;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function Project() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <Article>
      <ProjectForm>
        <TitleContainer>
          <TitleIcon>
            <i
              className="fas fa-paperclip"
              style={{ fontSize: "35px", color: "white" }}
            ></i>
          </TitleIcon>
          <Title>
            <h1 style={{ borderBottom: "1px solid #cccccc", color: "white" }}>
              PROJECTS
            </h1>
          </Title>
        </TitleContainer>
        <ProjectContainer>
          <Projects style={{ cursor: "pointer" }} onClick={TodayMongo}>
            <ProjectsTitle>
              <h1>Today I Learned</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project01"
                src={todayILearnedMongo}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>React와 Node JS 그리고 MongoDB를 사용하여 게시판을 만듬.</h2>
            </ProjectsContent>
          </Projects>
          <Projects style={{ cursor: "pointer" }}>
            <ProjectsTitle>
              <h1>Today I Learned</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project02"
                src={todayILearnedMariaDB}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                기존의 프로젝트에서 DB를 MongoDB에서 MariaDB로 바꿔서 게시판을
                만듬.
              </h2>
              <h2>paging기능을 추가함.</h2>
            </ProjectsContent>
          </Projects>
          <Projects style={{ cursor: "pointer" }}>
            <ProjectsTitle>
              <h1>Movie App</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={movieApp}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                인터넷 강의를 들으며 React와 NodeJS, MongoDB를 사용해서 MovieApp
                만듬.
              </h2>
            </ProjectsContent>
          </Projects>
          <Projects style={{ cursor: "pointer" }}>
            <ProjectsTitle>
              <h1>Carrot Game</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={jsGame}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>HTML, CSS, JavaScript를 사용하여 간단한 게임 구현.</h2>
            </ProjectsContent>
          </Projects>
          <Projects style={{ cursor: "pointer" }}>
            <ProjectsTitle>
              <h1>Nomflix</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={nomflix}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                영화 사이트에서 API를 받아서 React를 사용하여 Nomflix APP을
                만듬.
              </h2>
            </ProjectsContent>
          </Projects>
          <Projects style={{ cursor: "pointer" }}>
            <ProjectsTitle>
              <h1>WeTube</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={wetube}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                인터넷 강의를 들으며 Front를 Pug Back을 Node.JS, express.js와
                MongoDB를 사용하여 Youtube를 클론코딩 하여 공부함.
              </h2>
            </ProjectsContent>
          </Projects>
          <Projects style={{ cursor: "pointer" }}>
            <ProjectsTitle>
              <h1>JS-Chrome</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={jsChrome}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                JavaScript를 사용하여 현재 시간 구현과 TodoList, 날씨 정보를
                화면에 보여줌.
              </h2>
            </ProjectsContent>
          </Projects>
          <Projects style={{ cursor: "pointer" }}>
            <ProjectsTitle>
              <h1>Shopping Mall List</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "170px" }}
                alt="project03"
                src={jsList}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                HTML과 CSS, JavaScript를 사용하여 간단한 리스트 작성 Tool을
                만들어 봄.
              </h2>
            </ProjectsContent>
          </Projects>
          <Projects style={{ cursor: "pointer" }} onClick={openModal}>
            <ProjectsTitle>
              <h1>카카오톡</h1>
            </ProjectsTitle>
            <ProjectsImge>
              <img
                style={{ width: "100%", height: "55vh" }}
                alt="project03"
                src={kakao}
              />
            </ProjectsImge>
            <ProjectsContent>
              <h2>
                처음 공부를 시작할 때 강의를 들으며 HTML과 CSS를 사용하여
                카카오톡을 클론 코딩하여 정적인 페이지를 구현함.
              </h2>
            </ProjectsContent>
          </Projects>
        </ProjectContainer>
      </ProjectForm>
      <div>
        <Modal isOpen={modalIsOpen} style={customStyles}>
          <TodayMongo setIsOpen={setIsOpen} />
        </Modal>
      </div>
    </Article>
  );
}

export default Project;
