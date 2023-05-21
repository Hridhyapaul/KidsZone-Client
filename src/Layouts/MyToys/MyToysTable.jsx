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
                <label htmlFor="my-modal-4" className="btn btn-circle h-2 w-8"><FaPencilAlt></FaPencilAlt></label>

                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl relative">
                        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <div className="w-full bg-base-100 px-0 lg:px-5 mt-8">
                            <div className="card-body">
                                <form>
                                    <div className='grid grid-cols-2 gap-x-8 gap-y-3'>
                                        {/* Toy name input */}
                                        <div className="form-control col-span-1">
                                            <label className="label">
                                                <span className="label-text font-bold">Toy Name</span>
                                            </label>
                                            <input type="text" name='name' placeholder="Toy Name" className="input input-bordered" />
                                        </div>
                                        {/* Toy photo url input */}
                                        <div className="form-control col-span-1">
                                            <label className="label">
                                                <span className="label-text font-bold">Toy Photo URL</span>
                                            </label>
                                            <input type="text" name='image' placeholder="Photo URL" className="input input-bordered" />
                                        </div>
                                        {/* Seller name input */}
                                        <div className="form-control col-span-1">
                                            <label className="label">
                                                <span className="label-text font-bold">Seller Name</span>
                                            </label>
                                            <input type="text" name='sellerName' placeholder="Seller Name" className="input input-bordered" />
                                        </div>
                                        {/* Seller email input */}
                                        <div className="form-control col-span-1">
                                            <label className="label">
                                                <span className="label-text font-bold">Seller Email</span>
                                            </label>
                                            <input type="email" name='sellerEmail' placeholder="Seller Email" className="input input-bordered" />
                                        </div>
                                        {/* Sub-Category input */}
                                        <div className="form-control col-span-1">
                                            <label className="label">
                                                <span className="label-text font-bold">Sub-Category</span>
                                            </label>
                                            <input type="text" name='subCategory' placeholder="Sub-Category" className="input input-bordered" />
                                        </div>
                                        {/* Price input */}
                                        <div className="form-control col-span-1">
                                            <label className="label">
                                                <span className="label-text font-bold">Price</span>
                                            </label>
                                            <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                                        </div>
                                        {/* Rating input */}
                                        <div className="form-control col-span-1">
                                            <label className="label">
                                                <span className="label-text font-bold">Rating</span>
                                            </label>
                                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                                        </div>
                                        {/* Available quantity input */}
                                        <div className="form-control col-span-1">
                                            <label className="label">
                                                <span className="label-text font-bold">Available Quantity</span>
                                            </label>
                                            <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered" />
                                        </div>
                                        {/* Details input */}
                                        <div className="form-control col-span-2">
                                            <label className="label">
                                                <span className="label-text font-bold">Description</span>
                                            </label>
                                            <textarea className="textarea textarea-bordered" placeholder="Details Description" name='details'></textarea>
                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className='btn btn-primary bg-[#D268CC] hover:bg-[#bd5cb8] border-0 mb-3 mt-3' type="submit" value="Update" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default MyToysTable;