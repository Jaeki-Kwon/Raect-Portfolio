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
    <Article id="skillHeight">
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
                alt="skill_05"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6oEP7_kZbS8Q9iq2Ooo2B5NAMNPblkZqnWw&usqp=CAU"
              />
            </SkillImg>
          </Skills>
          <Skills>
            <SkillTitle>
              <h1>Deployment</h1>
            </SkillTitle>
            <SkillImg>
              <img
                style={{ width: "100%", height: "170px", marginTop: "60px" }}
                className="skillImg"
                alt="skill_06"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerZlgM2sZrZxcKKz8eXGysnDXxogwT-fKoA&usqp=CAU"
              />
            </SkillImg>
          </Skills>
          <Skills>
            <SkillTitle>
              <h1>Tools</h1>
            </SkillTitle>
            <SkillImg>
              <img
                style={{ width: "100%", height: "170px" }}
                className="skillImg"
                alt="skill_07"
                src="https://gaussian37.github.io/assets/img/etc/dev/vsc/vsc.png"
              />
              <img
                style={{ width: "100%", height: "170px" }}
                className="skillImg"
                alt="skill_08"
                src="data:image/jpeg;base64,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"
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
                alt="skill_09"
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
                alt="skill_10"
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
