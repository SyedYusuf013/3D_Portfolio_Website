import React from "react";

const Cover = ({ coverImg, title }) => {
  const coverImgStyle = {
    backgroundImage: `url(${coverImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="h-full" style={coverImgStyle}>
      <div className="flex items-center justify-center h-full page-shadow">
        <h1 className="text-5xl font-bold text-primary font-outline-2">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Cover;
