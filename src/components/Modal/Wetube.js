import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/Wetube/Wetube1.png";
import image2 from "./img/Wetube/Wetube2.png";
import image3 from "./img/Wetube/Wetube3.png";
import image4 from "./img/Wetube/Wetube4.png";
import image5 from "./img/Wetube/Wetube5.png";
import image6 from "./img/Wetube/Wetube6.png";

function Wetube({ setWetubeModal }) {
  const closeModal = () => {
    setWetubeModal(false);
  };

  const data = [image1, image2, image3, image4, image5, image6];

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
              <li>JavaScript 만을 사용하여 Youtube를 클론코딩함.</li>
              <li>회원가입을 하고 회원가입 정보로 로그인을 한다.</li>
              <li>
                Passport.js를 사용하여 Github 로그인 구현, Facebook은 못함...
              </li>
              <li>로그인 정보를 프로필에 들어가서 수정할 수 있다.</li>
              <li>Upload를 클릭하면 동영상을 업로드 가능.</li>
              <li>업로드한 동영상이 메인 페이지에 추가된다.</li>
              <li>동영상을 클릭하면 동영상을 볼수 있고 추가정보도 확인가능.</li>
              <li>댓글 기능 구현.</li>
              <li>Heroku를 사용하여 배포하였음.</li>
              <li>
                <a
                  href="https://safe-meadow-22997.herokuapp.com/"
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

export default Wetube;
