import React from "react";
// import EventsSection from "./EventsSection";
import Photos from "./Photos/Photos";
import PhotoData from "./Photos/Data/AssetsData";
import CoverImg from "../../Assets/bg2.jpeg";

const Gallery = () => {

  return (
    <div className="my-[5rem]">
<div className="relative h-96 bg-cover bg-center flex items-center justify-center" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${CoverImg})`,
        backgroundPosition: 'center'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
          Our Gallery</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          ” Capturing Moments, Creating Memories “
          </p>
          
          
        </div>
      </div>
  
  {/* Animated background elements */}
  <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4A762] rounded-full mix-blend-screen animate-pulse"></div>
    <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#D4A762] rounded-full mix-blend-screen animate-pulse animation-delay-2000"></div>
  </div>
      <Photos PhotoData={PhotoData} />
    </div>
  );
};

export default Gallery;