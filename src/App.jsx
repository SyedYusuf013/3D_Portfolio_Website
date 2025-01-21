import React from 'react';
import MyBook from './components/MyBook';
import BgTexture from "./assets/brown-wooden-flooring.jpg";

const BgTextureStyle = {
  backgroundImage: `url(${BgTexture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
};

const App = () => {
  return (
    <div
      style={BgTextureStyle}
      className="flex items-center justify-center w-full h-full">
      <MyBook />
    </div>
  );
};

export default App;