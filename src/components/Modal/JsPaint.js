import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/Paint/Painting1.png";
import image2 from "./img/Paint/Painting2.png";
import image3 from "./img/Paint/Painting3.png";
import image4 from "./img/Paint/Painting4.png";
import image5 from "./img/Paint/Painting5.png";

function JsPaint({ setPaintModal }) {
  const closeModal = () => {
    setPaintModal(false);
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
              <li>
                인터넷 강의를 들으며 JavaScript의 Canvas기능을 가지고 그림판
                만들기.
              </li>
              <li>색상과 두께를 조절하여 그림판에 표현할 수 있다.</li>
              <li>그린 그림을 png파일로 저장할 수 있다.</li>
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

export default JsPaint;
