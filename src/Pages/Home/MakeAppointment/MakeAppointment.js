import React from 'react';
import dm7 from '../../../assets/images/dm7.png'
import dm12 from '../../../assets/images/dm12.jpg'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32'
        style={ {
            background: `url(${dm12})`
        }}
        >
            <div className="hero2">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={dm7} alt="" className="-mt-20 lg:w-2/3 mt-8 rounded-lg shadow-2x1" />
                    <div className='text-center'>
                        <h2 className=' text-lg text-primary font-bold mt-5'>Appointment</h2>
                        <h1 className="text-white text-4xl font-bold">Let's get started today</h1>
                        <p className="text-white py-6">We able to take responsibility for our job and pleased to be your mentor in every aspect of your promotional activities.
                            Developing inaccuracies content and targeting the wrong audience doesn't only lose sales, they'll also waste a lot of money.
                            Are you just starting from Zero and wants to go Number One?
                            Or Do you have a business empire with a proven model and want to scale it up?
                            Then, we are here to make it happen for you.</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;