import React from "@astrojs/react";

const HoverTitle = ({ title }: { title: string }) => {
  return (
    <div>
      {title.split("").map((char, index) => (
        <span key={index} className="hover-text-title">
          {char}
        </span>
      ))}
    </div>
  );
};

export default HoverTitle;
