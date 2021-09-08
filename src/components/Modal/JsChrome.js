import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/Chrome/Chrome1.png";
import image2 from "./img/Chrome/Chrome2.png";
import image3 from "./img/Chrome/Chrome3.png";
import image4 from "./img/Chrome/Chrome4.png";

function JsChrome({ setChromeModal }) {
  const closeModal = () => {
    setChromeModal(false);
  };

  const data = [image1, image2, image3, image4];

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
                인터넷 강의를 들으며 HTML과 CSS, JavaScript를 사용하여 Chrome
                App을 만듬.
              </li>
              <li>현재시간과 현재위치, TodoList를 Chrome에 보여줌.</li>
              <li>저장된 정보는 Local Storage에 저장.</li>
              <li>
                <a
                  href="https://jaeki-kwon.github.io/Js-Chrome/"
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

export default JsChrome;
