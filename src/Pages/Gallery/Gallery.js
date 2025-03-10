import React from "react";
// import EventsSection from "./EventsSection";
import Photos from "./Photos/Photos";
import PhotoData from "./Photos/Data/AssetsData";

// import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";

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
      {/* <Breadcrumb pageName="Photo Gallery" /> */}
      {/* <header className="text-center py-8 bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">
          
        </h1>
        <p className="text-lg">
          
        </p>
      </header>
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