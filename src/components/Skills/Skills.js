import React from "react";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9c51d;
`;

const SkillForm = styled.div`
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

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
`;

const Skills = styled.div`
  margin-bottom: 25px;
  background-color: white;
  width: 350px;
  border-radius: 25px;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.45),
    30px 30px 40px rgba(118, 146, 180, 0.18);
  overflow: hidden;
  padding: 1.5rem;
`;

const SkillTitle = styled.div`
  margin-top: -20px;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: 700;
  font-size: 1.5rem;
  color: #f4623a;
`;

const SkillImg = styled.div`
  display: flex;
  flex-direction: column;
`;

function Skill() {
  return (
    <Article>
      <SkillForm>
        <TitleContainer>
          <TitleIcon>
            <i className="fas fa-paperclip" style={{ fontSize: "35px" }}></i>
          </TitleIcon>
          <Title>
            <h1 style={{ borderBottom: "1px solid #cccccc" }}>SKILLS</h1>
          </Title>
        </TitleContainer>
        <SkillContainer>
          <Skills>
            <SkillTitle>
              <h1>Front-end</h1>
            </SkillTitle>
            <SkillImg>
              <img
                style={{ width: "100%", height: "170px" }}
                className="skillImg"
                alt="skill_01"
                src="https://blog.kakaocdn.net/dn/bciYZs/btqIhYFjzOp/T30xCSojKbI33usZVjw9Ek/img.jpg"
              />
              <img
                style={{ width: "100%", height: "170px", marginTop: "70px" }}
                className="skillImg"
                alt="skill_02"
                src="https://media.vlpt.us/images/hanjiyeon/post/579dd2df-3231-4e55-a8ea-2f8b9e56c0d2/1B5EE4D5D773F8A-RR.jpg"
              />
            </SkillImg>
          </Skills>
          <Skills>
            <SkillTitle>
              <h1>Back-end</h1>
            </SkillTitle>
            <SkillImg>
              <img
                style={{ width: "100%", height: "170px" }}
                className="skillImg"
                alt="skill_03"
                src="https://heropy.blog/css/images/vendor_icons/nodejs.png"
              />
              <img
                style={{ width: "100%", height: "180px" }}
                className="skillImg"
                alt="skill_04"
                src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmOAod%2FbtqBJeuznU9%2Fu8tp7X3Rse47AqwFXPmSc1%2Fimg.png"
              />
              <img
                style={{ width: "100%", height: "180px" }}
                className="skillImg"
                alt="skill_04"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6oEP7_kZbS8Q9iq2Ooo2B5NAMNPblkZqnWw&usqp=CAU"
              />
            </SkillImg>
          </Skills>
          <Skills>
            <SkillTitle>
              <h1>Version Control</h1>
            </SkillTitle>
            <SkillImg>
              <img
                style={{ width: "100%", height: "170px" }}
                className="skillImg"
                alt="skill_05"
                src="data:image/png;base64,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"
              />
            </SkillImg>
          </Skills>
          <Skills>
            <SkillTitle>
              <h1>Certificate</h1>
            </SkillTitle>
            <SkillImg>
              <img
                style={{ width: "100%", height: "170px" }}
                className="skillImg"
                alt="skill_06"
                src="https://cdg-portfolio.com/images/skills/certificate.jpg"
              />
            </SkillImg>
          </Skills>
        </SkillContainer>
      </SkillForm>
    </Article>
  );
}

export default Skill;
