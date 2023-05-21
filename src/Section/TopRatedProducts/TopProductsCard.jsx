import React from 'react';
import ReactStars from "react-rating-stars-component";

const TopProductsCard = ({ topProduct }) => {
    const { name, price, rating } = topProduct

    const firstExample = {
        size: 24,
        value: rating,
        edit: false
    };

    return (
        <div className='col-span-1'>
            <div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='h-16'>
                            <h2 className="card-title">{name}</h2>
                        </div>
                        <hr />
                        <div className='flex justify-start items-center gap-x-4'>
                            <ReactStars {...firstExample} />
                            <span className='font-semibold'>({rating})</span>
                        </div>
                        <p className='font-semibold text-lg'>${price}</p>
                        <div className="card-actions justify-end">
                            <button className="mt-4 bg-[#D268CC] text-white px-4 py-2 rounded-full">
                                Explore this Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopProductsCard;