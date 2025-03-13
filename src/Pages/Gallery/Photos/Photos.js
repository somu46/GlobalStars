import React from 'react';
import './photos.scss';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Photos = ({ PhotoData }) => {
   
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 p-4 w-[90%] mx-auto border">
                <LightGallery
                    onInit={() => console.log('lightGallery has been initialized')}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                >
                    {PhotoData.length > 0 ? (
                        PhotoData.map((image, index) => (
                            <a href={image.src} key={index} data-src={image.src}>
                                <img
                                    alt={image.title || `Image ${index + 1}`}
                                    src={image.src}
                                    className="thumblin-img"
                                />
                            </a>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No images available for this category.</p>
                    )}
                </LightGallery>
            </div>
        </>
    );
};

export default Photos;