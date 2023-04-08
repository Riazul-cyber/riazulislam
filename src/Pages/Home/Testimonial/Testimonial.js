import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {

        const reviews = [
            {
                _id: 1,
                name: 'Winson Herry',
                img: people1,
                review: '"Thanks to DMarketing Guru, the seller Facebook presence has generated consistent leads. He is punctual and communicates effectively. His marketing expertise is impressive."',
                location: 'California, USA'
            },
            {
                _id: 2,
                name: 'Sasha Cohen',
                img: people2,
                review: '"The professionalism and efforts toward communication are top notch."',
                location: 'Milan, Italy'
            },
            {
                _id: 3,
                name: 'Alice Jackson',
                img: people3,
                review: '"Thus far, my experience has been perfect. He is incredibly organized and has everything clearly set out for us."',
                location: 'Canberra, Australia'
            },
        ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonial</h4>
                    <h2 className='text-4xl'>What our clients says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt=""/>
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                 reviews.map(review =><Review
                    key={review._id}
                    review={review}
                    >
                    </Review> )
                }
            </div>
        </section>
    );
};

export default Testimonial;