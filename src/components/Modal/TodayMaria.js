import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/Maria/Maria1.png";
import image2 from "./img/Maria/Maria2.png";
import image3 from "./img/Maria/Maria3.png";
import image4 from "./img/Maria/Maria4.png";
import image5 from "./img/Maria/Maria5.png";
import image6 from "./img/Maria/Maria6.png";
import image7 from "./img/Maria/Maria7.png";

function TodayMaria({ setMaria }) {
  const closeModal = () => {
    setMaria(false);
  };

  const data = [image1, image2, image3, image4, image5, image6, image7];

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
                  style={{ cursor: "pointer" }}
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
              <li>MongoDB로 프로젝트 만들었을 때와 똑같다.</li>
              <li>추가적으로 Paging기능과 시간을 현재시각으로 바꾸었다.</li>
              <li>
                <a
                  href="https://today-i-learned1.herokuapp.com/"
                  target="blank"
                >
                  여기서
                </a>{" "}
                확인하기
              </li>
              <li>Heroku를 사용하여 배포하였음.</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayMaria;
