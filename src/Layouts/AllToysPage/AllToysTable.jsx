import React from 'react';
import { Link } from 'react-router-dom';

const AllToysTable = ({ toy }) => {
    const { _id, sellerName, sellerEmail, name, subCategory, price, quantity, } = toy;
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{sellerName}</div>
                        <div className="text-sm opacity-50">{sellerEmail}</div>
                    </div>
                </div>
            </td>
            <td>
                <h1 className='font-semibold'>{name}</h1>
                <span className="badge badge-ghost badge-sm">{subCategory}</span>
            </td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/viewDetails/${_id}`}>
                    <button className="btn">
                        View Details
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default AllToysTable;