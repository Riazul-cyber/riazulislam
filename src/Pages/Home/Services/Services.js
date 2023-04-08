import React from 'react';
import strategy from '../../../assets/images/strategy.png'
import dm8 from '../../../assets/images/dm8.png'
import dm9 from '../../../assets/images/dm9.png'
import Service from './Service';
const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Strategy Buildup',
            description: 'Digital marketing strategy is the process of planning, executing and evaluating a set of digital marketing initiatives that are aligned with an organizational or personal overall marketing goals and objectives. Building a successful digital marketing strategy requires a deep understanding of the target audience, market trends, and the various digital marketing channels available. We will provide proper strategy for you.',
            img: strategy,
        },
        {
            id: 2,
            name: 'Support',
            description: 'You will get 24*7 support so that you do not feel abandoned. We are always here for you whenever you need us. Client satisfaction is our main priority.',
            img: dm8,
        },
        {
            id: 3,
            name: 'Growth',
            description: 'Growth and success does not come overnight. Consistency and time is the most important facts here. We will make sure your time and money is not wasted and you get what you are looking for',
            img: dm9,
        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services we provide</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service=> <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;