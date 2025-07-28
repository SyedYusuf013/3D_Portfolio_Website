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
    <div className="w-full h-full overflow-hidden" style={coverImgStyle}>
      <div className="flex items-center justify-center h-full page-shadow">
        <h1 className="w-4/5 pl-10 text-4xl font-bold text-center md:text-5xl text-primary font-outline-2">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Cover;
