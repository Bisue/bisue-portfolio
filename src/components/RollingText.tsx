import React, { useEffect, useState } from "react";

interface RollingTextProps {
  texts: string[];
}

const RollingText: React.FC<RollingTextProps> = ({ texts }) => {
  const [rollingTexts, setRollingTexts] = useState(
    texts.map((text, idx) => ({
      text,
      active: idx === 0,
    }))
  );

  useEffect(() => {
    console.log("new Timeout");
    const id = setTimeout(() => {
      const nextIdx =
        (rollingTexts.findIndex((r) => r.active) + 1) % rollingTexts.length;

      setRollingTexts(
        rollingTexts.map((r, i) => ({
          ...r,
          active: i == nextIdx,
        }))
      );
    }, 5000);

    return () => {
      console.log("clear Timeout");
      clearTimeout(id);
    };
  }, [rollingTexts]);

  const activeClassName = "opacity-100 translate-y-0 delay-500";
  const inactiveClassName = "opacity-0 -translate-y-5";

  return (
    <div className="relative h-9" style={{ fontSize: 24 }}>
      {rollingTexts.map(({ text, active }) => (
        <span
          key={text}
          className={`block absolute h-full w-full transition duration-1000 ${
            active ? activeClassName : inactiveClassName
          }`}
        >
          {text}
        </span>
      ))}
    </div>
  );
};

export default RollingText;
