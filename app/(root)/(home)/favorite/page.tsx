import React from "react";

function Favorite() {
  return (
    <div className="w-full bg-black bg-dot-white/[0.2] relative flex h-screen">
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h1 className="text-3xl font-extrabold z-10">
        Your <span className="text-[#B02DD4]">Favorite</span> words appear here.
      </h1>
    </div>
  );
}

export default Favorite;
