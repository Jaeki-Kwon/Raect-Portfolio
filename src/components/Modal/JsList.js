import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/List/List1.png";
import image2 from "./img/List/List2.png";
import image3 from "./img/List/List3.png";

function JsList({ setListModal }) {
  const closeModal = () => {
    setListModal(false);
  };

  const data = [image1, image2, image3];

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
              <li>
                HTML과 CSS, JavaScript 배운것을 가지고 간단하게 리스트 작성하는
                것을 만들어봄.
              </li>
              <li>
                <a
                  href="https://jaeki-kwon.github.io/Js-Shopping-mall/"
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

export default JsList;
