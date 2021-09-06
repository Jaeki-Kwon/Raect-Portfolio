import React from "react";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d809f;
`;

const ProjectContent = styled.div`
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

function Project() {
  return (
    <Article>
      <ProjectContent>
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
      </ProjectContent>
    </Article>
  );
}

export default Project;
