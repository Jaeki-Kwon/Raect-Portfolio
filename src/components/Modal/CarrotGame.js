import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/CarrotGame/Carrot1.png";
import image2 from "./img/CarrotGame/Carrot2.png";
import image3 from "./img/CarrotGame/Carrot3.png";
import image4 from "./img/CarrotGame/Carrot4.png";
import image5 from "./img/CarrotGame/Carrot5.png";

function CarrotGame({ setCarrot }) {
  const closeModal = () => {
    setCarrot(false);
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
              <li>순수 자바스크립트만을 사용하여 게임을 만들었다.</li>
              <li>벌레를 클릭하면 게임에서 패배한다.</li>
              <li>시간을 초과하면 게임에서 패배한다.</li>
              <li>시간내에 당근을 전부 클릭하면 게임에서 승리한다.</li>
              <li>
                <a
                  href="https://jaeki-kwon.github.io/Js-Carrot-Game/"
                  target="blank"
                >
                  여기서
                </a>{" "}
                확인하기
              </li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarrotGame;
