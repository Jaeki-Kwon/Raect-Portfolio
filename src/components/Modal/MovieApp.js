import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/MovieApp/MovieApp1.png";
import image2 from "./img/MovieApp/MovieApp2.png";
import image3 from "./img/MovieApp/MovieApp3.png";
import image4 from "./img/MovieApp/MovieApp4.png";
import image5 from "./img/MovieApp/MovieApp5.png";

function MovieApp({ setMovieAppModal }) {
  const closeModal = () => {
    setMovieAppModal(false);
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
                강의를 들으며 React와 NodeJs, MongoDB를 사용하여 MovieApp을
                만듬.
              </li>
              <li>Themoviedb라는 사이트의 API를 가져와서 영화들을 가져옴.</li>
              <li>
                회원가입, 로그인 한 후 영화를 클릭하면 영화 세부정보를 볼 수
                있음.
              </li>
              <li>Toggle Acoter View를 누르면 출연진의 사진을 확인 가능.</li>
              <li>Add to Favorite을 클릭 하면 좋아요가 추가됨.</li>
              <li>
                메뉴의 Favorite을 클릭하면 이 사람이 좋아요 한 리스트들을 확인할
                수 있음.
              </li>
              <li>
                <a href="https://calm-harbor-05507.herokuapp.com/">여기서</a>{" "}
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

export default MovieApp;
