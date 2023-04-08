import React, { useState } from 'react';
import dm11 from '../../../assets/images/dm11.png';
import {DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header className='my-6'>
            <div className="hero3">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={dm11} alt='' className="lg:w-1/5 max-w-sm" />
                    <div className='mr=6 rounded-lg lg:flex-row-reverse shadow-2xl'>
                    <DayPicker 
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />
                    
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;