import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const CategoryCard = ({ toy }) => {
    const { _id, image, name, price, rating } = toy;

    const firstExample = {
        size: 24,
        value: rating,
        edit: false
    };
    return (

        <div className="card w-[380px] lg:w-[350px] bg-base-100 shadow-xl col-span-1 mx-auto">
            <figure><img className='h-[400px] object-cover' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='h-[70px]'>
                    <h2 className="card-title">{name}</h2>
                </div>
                <hr />
                <div className='flex justify-between items-center mt-2'>
                    <p className='text-[28px] font-bold'>${price}</p>
                    <ReactStars {...firstExample} />
                </div>
                <div className="card-actions justify-end mt-3">
                    <Link to={`/viewDetails/${_id}`}><button className="bg-[#D268CC] px-4 py-2 text-white rounded-lg">View Details</button></Link>

                </div>
            </div>
        </div>

    );
};

export default CategoryCard;