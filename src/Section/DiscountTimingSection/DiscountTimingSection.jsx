import React, { useState, useEffect } from 'react';

const DiscountTimingSection = () => {
    const [timeRemaining, setTimeRemaining] = useState({ days: 15, hours: 12, minutes: 30, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                const { days, hours, minutes, seconds } = prevTime;
                let updatedSeconds = seconds - 1;
                let updatedMinutes = minutes;
                let updatedHours = hours;
                let updatedDays = days;

                if (updatedSeconds < 0) {
                    updatedMinutes -= 1;
                    updatedSeconds = 59;
                }
                if (updatedMinutes < 0) {
                    updatedHours -= 1;
                    updatedMinutes = 59;
                }
                if (updatedHours < 0) {
                    updatedDays -= 1;
                    updatedHours = 23;
                }

                return {
                    days: updatedDays,
                    hours: updatedHours,
                    minutes: updatedMinutes,
                    seconds: updatedSeconds,
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-pink-100 py-8 max-w-[1100px] mx-auto mt-16 rounded-lg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-center mb-8">Limited Time Discount</h2>
                <div className="flex justify-center items-center">

                    <div className=" bg-white rounded-lg shadow-xl py-6 px-8">
                        <div className="text-2xl font-bold mb-2 text-center">Hurry Up!</div>
                        <div className='flex items-center justify-center'>
                            <div className="flex flex-col items-center">
                                <span className="text-5xl font-bold text-[#D268CC]">30%</span>
                                <span className="text-xl font-semibold text-gray-700">OFF on Baby Toy Products</span>
                            </div>
                            <div className="flex flex-col items-center ml-8">
                                <div className="text-xl font-semibold text-gray-700">Offer Ends in</div>
                                <div className='flex items-center gap-x-4'>
                                    <div className="flex items-center mt-2 bg-[#D268CC] px-5 py-3 rounded-2xl">
                                        <div className="text-4xl font-bold text-white mr-1">{timeRemaining.days.toString().padStart(2, '0')}</div>
                                        <div className="text-lg text-white">Days</div>
                                    </div>
                                    <div className="flex items-center mt-2 bg-[#D268CC] px-5 py-3 rounded-2xl">
                                        <div className="text-4xl font-bold text-white mr-1">{timeRemaining.hours.toString().padStart(2, '0')}</div>
                                        <div className="text-lg text-white">Hours</div>
                                    </div>
                                    <div className="flex items-center mt-2 bg-[#D268CC] px-5 py-3 rounded-2xl">
                                        <div className="text-4xl font-bold text-white mr-1">{timeRemaining.minutes.toString().padStart(2, '0')}</div>
                                        <div className="text-lg text-white">Minutes</div>
                                    </div>
                                    <div className="flex items-center mt-2 bg-[#D268CC] px-5 py-3 rounded-2xl">
                                        <div className="text-4xl font-bold text-white mr-1">{timeRemaining.seconds.toString().padStart(2, '0')}</div>
                                        <div className="text-lg text-white">Seconds</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};
export default DiscountTimingSection;