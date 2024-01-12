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
      className="fixed bottom-9 right-9 p-5 rounded-full bg-white/75 group transition hover:bg-white/100"
      onClick={scrollToTop}
    >
      <img
        className="w-16 h-16 transition group-hover:-translate-y-2"
        src="/img/rocket.svg"
        alt="위로"
      />
    </button>
  );
};

export default GoToTop;
