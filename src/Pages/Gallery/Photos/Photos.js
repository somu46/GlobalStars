import React, { useEffect, useState } from 'react';
import './photos.scss';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {Safety_Services,Appliance_Repair_Services,Parties,Renovation_Fabrication,Salon_Spa,Painting_Wall_Makeover} from './Data/AssetsData';

const itemsArray = ['Safety_Services', 'Appliance_Repair_Services', 'Renovation_Fabrication', 'Salon_Spa', 'cultural-events', 'Painting_Wall_Makeover'];

const Photos = ({ id }) => {
    const [PhotoData, setPhotoData] = useState([]);

    useEffect(() => {
        if (itemsArray.includes(id)) {
            if(id==="Safety_Services"){
                setPhotoData(Safety_Services);
            }
            if(id==="Appliance_Repair_Services"){
                setPhotoData(Appliance_Repair_Services);
            }
            if(id==="Renovation_Fabrication"){
                setPhotoData(Renovation_Fabrication);
            }
            if(id==="Salon_Spa"){
                setPhotoData(Salon_Spa);
            }
            if(id==="Painting_Wall_Makeover"){
                setPhotoData(Painting_Wall_Makeover);
            }
            if(id==="parties"){
                setPhotoData(Parties);
            }
        } else {
            setPhotoData([]);
        }
    }, [id]);

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