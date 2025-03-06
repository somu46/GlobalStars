import React from 'react';
import Event from './Event';
import weddingThumb from "../../Assets/am.png";
import sangeetHaldiThumb from "../../Assets/am.png";
import Birthdays from "../../Assets/am.png";
// import Party from "";
import Cultural  from "../../Assets/am.png";
import Receptions  from "../../Assets/am.png";



const events = [
    { image: weddingThumb, title: 'Appliance Repair and Services', id: 'Appliance_Repair_Services' },
    { image:Receptions, title: 'Safety Services', id: 'Safety_Services' },
    { image: sangeetHaldiThumb, title: 'Painting & Wall Makeover', id: 'Painting_Wall_Makeover' },
    { image: Birthdays, title: 'Salon & Spa', id: 'Salon_Spa' },
    { image: Cultural, title: 'Renovation & Fabrication', id: 'Renovation_Fabrication' },
    // { image: Party, title: 'Parties Collection', id: 'parties' },
];

const EventsSection = ({ propsFun }) => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {events.map((event, index) => (
                <Event
                    key={index}
                    image={event.image}
                    title={event.title}
                    clickedFun={() => propsFun(event.id)}
                />
            ))}
        </section>
    );
};

export default EventsSection;