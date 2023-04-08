
import React from 'react';
import dm6 from '../../../assets/images/dm6.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <img src={dm6} className="rounded-lg lg:w-1/2 shadow-2xl" alt=''/>
    <div>
      <h1 className="text-white text-5xl font-bold">Digital Marketing Expert at your service!</h1>
      <p className="py-6 text-white">Hi, this is Riazul Islam Rifat. I've been doing Digital Marketing from the last 3 years. Successfully completed more than 25+ projects on freelancing marketplace. I will provide excellent services using my expertise. If you are looking for a professional Digital Marketer then you are in the right place.</p>
      <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    );
};

export default Banner;