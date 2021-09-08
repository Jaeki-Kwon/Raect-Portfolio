import React from "react";
import "../Modal/Modal.css";
import image1 from "./img/Kakao/Kakao1.png";
import image2 from "./img/Kakao/Kakao2.png";
import image3 from "./img/Kakao/Kakao3.png";
import image4 from "./img/Kakao/Kakao4.png";
import image5 from "./img/Kakao/Kakao5.png";
import image6 from "./img/Kakao/Kakao6.png";

function Kakao({ setKakaoModal }) {
  const closeModal = () => {
    setKakaoModal(false);
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
              <li>
                코딩공부를 처음 시작할 때 인터넷 강의를 들으며 HTML과 CSS만을
                가지고 카카오톡을 클론코딩하여 공부함.
              </li>
              <li>
                Friend창, Chats창, 채팅방창, Find창, More창 등을 정적인 페이지로
                만듬.
              </li>
              <li>
                채팅방 안에 루피 프로필 사진을 애니메이션을 걸어서 회전시키게
                만들어봄.
              </li>
              <li>
                @media를 사용하여 페이지 크기가 어느정도 크기을 때만 페이지를
                보일 수 있게 하는 효과 적용.
              </li>
              <li>
                <a
                  href="https://jaeki-kwon.github.io/kakao-clone-2.0/"
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

export default Kakao;
