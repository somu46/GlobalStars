import React from "react";
// import EventsSection from "./EventsSection";
import Photos from "./Photos/Photos";
import PhotoData from "./Photos/Data/AssetsData";


const Gallery = () => {
  // const [sectionId, setsectionId] = useState("");
  // const [isopen, setisopen] = useState(true);
  // const handleItem = (id) => {
  //   const element = document.getElementById(id);

  //   setsectionId(id);

  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  //   if (sectionId) {
  //     setisopen(!isopen);
  //   }
  // };

  return (
    <div className="my-[5.1rem]">
 
 <header className="relative py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white overflow-hidden">
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6 transform hover:scale-105 transition-transform duration-300">
        Our Gallery
      </h1>
      <p className="text-xl mb-8 opacity-90 font-light">
        Capturing Moments, Creating Memories
      </p>
      <div className="flex justify-center space-x-4">
        <span className="w-12 h-1 bg-[#D4A762] transform rotate-45"></span>
        <span className="w-12 h-1 bg-[#D4A762]"></span>
        <span className="w-12 h-1 bg-[#D4A762] transform -rotate-45"></span>
      </div>
    </div>
  </div>
  
  {/* Animated background elements */}
  <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4A762] rounded-full mix-blend-screen animate-pulse"></div>
    <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#D4A762] rounded-full mix-blend-screen animate-pulse animation-delay-2000"></div>
  </div>
</header>
{/*
      {isopen ? (
        <EventsSection propsFun={handleItem} />
      ) : (
        <section id={sectionId} className="min-h-screen bg-gray-100">
          <div className="h-auto">
            <header className="text-center py-8 bg-gray-100 text-gray-800 relative flex justify-between px-3">
              <div className="mx-5">
                <h1 className="text-4xl font-bold mb-4 mt-3 text-gray-700 border-b-2 rounded-md border-orange-500">
                  Our {sectionId} Collection
                </h1>
              </div>
              <button
                onClick={() => setisopen(!isopen)}
                className=" mx-3 my-1 absolute top-0 right-4 text-white px-4 py-2 bg-[#D4A762] rounded transition-colors duration-300 font-thin hover:bg-white hover:text-[#D4A762]"
              >
                BACK TO GALLERY
              </button>
            </header>
          </div>
        </section>
      )} */}
      <Photos PhotoData={PhotoData} />
    </div>
  );
};

export default Gallery;