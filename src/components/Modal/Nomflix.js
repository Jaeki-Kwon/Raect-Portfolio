import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/Nomflix/Nomflix1.png";
import image2 from "./img/Nomflix/Nomflix2.png";
import image3 from "./img/Nomflix/Nomflix3.png";
import image4 from "./img/Nomflix/Nomflix4.png";

function Nomflix({ setNomflixModal }) {
  const closeModal = () => {
    setNomflixModal(false);
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
                themoviedb라는 사이트의 API를 가져와서 React로 Netflix와 비슷한
                사이트를 만듬.
              </li>
              <li>
                API에서 현재 재생중인 영화와 유명한 영화, 상영예정 영화의 정보를
                가져와 보여준다.{" "}
              </li>
              <li>
                API에서 현재 평점이 높은 TV프로그램, 유명한 프로그램, 오늘
                방송하는 프로그램을 가져와서 보여준다.
              </li>
              <li>Search에서 찾고 싶은 영화나 TV Show 들을 검색할 수 있다.</li>
              <li>
                <a href="https://jaeki-kwon.github.io/nomflix" target="blank">
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

export default Nomflix;
