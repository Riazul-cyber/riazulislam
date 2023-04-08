import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id: 1,
            name: 'Service Hours',
            description: '40+ hours a week',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-second',
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Dhaka, Bangladesh',
            icon: marker,
            bgClass: 'bg-accent',
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Call Us',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-second',
        },
    ]

    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card =><InfoCard 
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;