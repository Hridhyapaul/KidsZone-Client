import React from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const MyToysTable = ({ singleToy }) => {
    const { image, name, price, quantity, subCategory, details } = singleToy;
    return (
        <tr>
            <th>
                <label>
                    <button className="btn btn-circle h-2 w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {subCategory}
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <label htmlFor="my-modal-3" className="btn btn-ghost btn-xs">open modal</label>

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <p className="py-4">{details}</p>
                    </div>
                </div>
            </th>

            <td>
                {/* <button className="btn btn-circle h-2 w-8">
                    
                </button> */}
                <label htmlFor="my-modal-3" className="btn btn-circle h-2 w-8"><FaPencilAlt></FaPencilAlt></label>

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <p className="py-4">{details}</p>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default MyToysTable;