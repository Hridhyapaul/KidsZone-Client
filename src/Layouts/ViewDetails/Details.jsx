import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const singleProduct = useLoaderData();
    console.log(singleProduct)
    const { image, details, name, price, quantity, rating } = singleProduct;

    const firstExample = {
        size: 24,
        value: rating,
        edit: false
    };

    return (
        <>
            <div className="max-w-[1100px] mx-auto bg-white rounded-md overflow-hidden shadow-md md:flex pt-12">
                <div className="md:w-1/2">
                    <img
                        className="w-full mb-8"
                        src={image}
                        alt="Card Image"
                    />
                </div>
                <div className="p-4 md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
                    <p className="text-gray-600 mb-4">
                        {details}
                    </p>
                    <div className='flex justify-between lg:justify-start items-center gap-x-10'>
                        <p className='text-xl font-bold'>${price}</p>
                        <ReactStars {...firstExample} />
                    </div>

                    <div className="flex justify-end lg:justify-start mt-5">
                        <div className="bg-[#D268CC] w-fit px-4 py-2 rounded-full"><p className="text-white">
                            {quantity > 0 ? `Only ${quantity} left in stock` : 'Out of stock'}
                        </p></div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Details;