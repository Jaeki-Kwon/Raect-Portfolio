import React from "react";

function TodayMongo({ setIsOpen }) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <h2>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </>
  );
}

export default TodayMongo;
