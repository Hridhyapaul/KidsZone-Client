import React from 'react';
import ReactStars from "react-rating-stars-component";

const TopProductsCard = ({ topProduct }) => {
    const { name, price, rating } = topProduct

    const productRating = {
        size: 24,
        value: rating,
        edit: false
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
            {/* Product Info */}
            <div className="p-4">
                <div className='h-[50px] my-2'>
                    <h3 className="text-lg font-bold my-2">{name}</h3>
                </div>
                <hr className='my-4' />
                <div className='space-y-2'>
                    <div className='flex justify-start items-center gap-x-5'>
                        <ReactStars {...productRating} /> <span className='text-lg font-semibold'>({rating})</span>
                    </div>
                    <p className="text-gray-600 font-semibold text-lg">
                        ${price}
                    </p>
                </div>
                <button className="mt-4 bg-[#D268CC] text-white px-4 py-2 rounded-full">
                    Explore this Product
                </button>
            </div>
        </div>
    );
};

export default TopProductsCard;