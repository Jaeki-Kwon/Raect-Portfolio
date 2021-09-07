import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/Mongo/Mongo1.png";
import image2 from "./img/Mongo/Mongo2.png";
import image3 from "./img/Mongo/Mongo3.png";
import image4 from "./img/Mongo/Mongo4.png";
import image5 from "./img/Mongo/Mongo5.png";
import image6 from "./img/Mongo/Mongo6.png";

function TodayMongo({ setMongo }) {
  const closeModal = () => {
    setMongo(false);
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
              <li>SignUp 버튼을 누른다.</li>
              <li>Email과 Name, Password를 적고 회원가입 한다.</li>
              <li>
                SignIn을 클릭하여 가입했던 Email과 Password를 적고 로그인 한다.
              </li>
              <li>글 쓰기를 들어가서 글을 쓴다. </li>
              <li>
                메인화면에서 글을 클릭하면 Detail 창으로 넘어간다. 글 수정, 글
                삭제 가능.
              </li>
              <li>
                <a href="https://today-learned.herokuapp.com/" target="blank">
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

export default TodayMongo;
