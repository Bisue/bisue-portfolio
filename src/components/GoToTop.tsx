import React from "react";

const GoToTop: React.FC = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      className="fixed bottom-9 right-9 p-5 rounded-full bg-white"
      onClick={scrollToTop}
    >
      <img className="w-16 h-16" src="/img/rocket.svg" alt="위로" />
    </button>
  );
};

export default GoToTop;
