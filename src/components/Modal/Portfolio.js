import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/Portfolio/Portfolio1.png";
import image2 from "./img/Portfolio/Portfolio2.png";
import image3 from "./img/Portfolio/Portfolio3.png";
import image4 from "./img/Portfolio/Portfolio4.png";
import image5 from "./img/Portfolio/Portfolio5.png";

function Portfolio({ setPortfolioModal }) {
  const closeModal = () => {
    setPortfolioModal(false);
  };

  const data = [image1, image2, image3, image4, image5];

  return (
    <div className="Modal">
      <div className="Modal_False">
        <i onClick={closeModal} className="fas fa-times"></i>
      </div>
      <div className="Modal_Inner">
        <h1 style={{ textAlign: "center" }}>More Information</h1>
        <div>
          <div className="Modal_Inner-Image">
            {data.map((imgs, num) => {
              return (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                  src={imgs}
                  key={num}
                  onClick={() => {
                    window.open(imgs);
                  }}
                />
              );
            })}
          </div>
          <div className="Modal_Inner-Detail">
            <p>
              <li>지금까지 공부한 것을 기반으로 포트폴리오를 제작.</li>
              <li>
                상단에 Home, About, Skill, Project를 클릭하면 그 위치로 이동.
              </li>
              <li>
                프로젝트들을 클릭하면 Modal창을 만들어 세부내용하는 것을 만듬.
              </li>
              <li>맨 밑에 깃허브 이모티콘 클릭하면 내 깃허브 주소로 이동.</li>
              <li>
                <a href="https://jaeki-kwon.github.io/Js-paintjs/">여기서</a>{" "}
                확인하기
              </li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
