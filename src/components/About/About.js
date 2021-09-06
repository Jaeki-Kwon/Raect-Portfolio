import React from "react";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutForm = styled.div`
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

const AboutContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-left: 30px;
`;

const AboutInfoWrap = styled.div`
  width: 33.33%;
`;

const AboutInfo = styled.div`
  display: flex;
`;

const AboutIcon = styled.div`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  margin-top: 1.3rem;
  margin-right: 2rem;
`;

const AboutField = styled.div``;

const About = () => {
  return (
    <Article>
      <AboutForm>
        <TitleContainer>
          <TitleIcon>
            <i className="fas fa-paperclip" style={{ fontSize: "35px" }}></i>
          </TitleIcon>
          <Title>
            <h1 style={{ borderBottom: "1px solid #cccccc" }}>ABOUT ME</h1>
          </Title>
        </TitleContainer>
        <AboutContainer>
          <AboutInfoWrap>
            <AboutInfo>
              <AboutIcon>
                <i className="fas fa-user" style={{ fontSize: "35px" }}></i>
              </AboutIcon>
              <AboutField>
                <h2>이름</h2>
                <h3>권재기</h3>
              </AboutField>
            </AboutInfo>
          </AboutInfoWrap>
          <AboutInfoWrap>
            <AboutInfo>
              <AboutIcon>
                <i className="fas fa-calendar" style={{ fontSize: "35px" }}></i>
              </AboutIcon>
              <AboutField>
                <h2>생년월일</h2>
                <h3>93.11.26</h3>
              </AboutField>
            </AboutInfo>
          </AboutInfoWrap>
          <AboutInfoWrap>
            <AboutInfo>
              <AboutIcon>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ fontSize: "35px" }}
                ></i>
              </AboutIcon>
              <AboutField>
                <h2>주소지</h2>
                <h3>광주광역시 서구</h3>
              </AboutField>
            </AboutInfo>
          </AboutInfoWrap>
          <AboutInfoWrap>
            <AboutInfo>
              <AboutIcon>
                <i
                  className="fas fa-phone-alt"
                  style={{ fontSize: "35px" }}
                ></i>
              </AboutIcon>
              <AboutField>
                <h2>연락처</h2>
                <h3>010-6681-8840</h3>
              </AboutField>
            </AboutInfo>
          </AboutInfoWrap>
          <AboutInfoWrap>
            <AboutInfo>
              <AboutIcon>
                <i className="fas fa-envelope" style={{ fontSize: "35px" }}></i>
              </AboutIcon>
              <AboutField>
                <h2>이메일</h2>
                <h3>worl1126@naver.com</h3>
              </AboutField>
            </AboutInfo>
          </AboutInfoWrap>
          <AboutInfoWrap>
            <AboutInfo>
              <AboutIcon>
                <i
                  className="fas fa-pencil-alt"
                  style={{ fontSize: "35px" }}
                ></i>
              </AboutIcon>
              <AboutField>
                <h2>학력</h2>
                <h3>조선대학교(항공우주공학)</h3>
              </AboutField>
            </AboutInfo>
          </AboutInfoWrap>
        </AboutContainer>
      </AboutForm>
    </Article>
  );
};

export default About;
