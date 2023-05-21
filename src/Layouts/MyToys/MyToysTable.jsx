import React, { useContext } from 'react';
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi";
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const MyToysTable = ({ singleToy, setMyToys, myToys }) => {
    const { user } = useContext(AuthContext)
    const { _id, image, name, price, quantity, sellerEmail, rating, subCategory, details } = singleToy;

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const updateToys = {
            name, image, sellerName, sellerEmail, subCategory, price, rating, quantity, details
        }
        // console.log(updateToys)

        fetch(`https://kids-zone-server-indol.vercel.app/updateToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this product",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //   
                fetch(`https://kids-zone-server-indol.vercel.app/deleteToys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = myToys.filter(myToy => myToy._id !== _id)
                            setMyToys(remaining);
                        }
                    })
            }
        })
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{subCategory}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img className='object-cover object-top' src={image} />
                    </div>
                </div>
            </td>
            <td>
                {sellerEmail}

            </td>
            <td>${price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <th>
                <label htmlFor="my-modal-3" className="btn btn-ghost btn-xs">Description</label>

                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-[80%] max-w-5xl relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <p className="py-4">{details}</p>
                    </div>
                </div>
            </th>

            <td>
                {/* <button className="btn btn-circle h-2 w-8">
                    
                </button> */}
                <label htmlFor="my-modal-4" className="btn btn-circle h-2 w-8"><HiOutlinePencil className='h-6 w-6'></HiOutlinePencil></label>

                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl relative">
                        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                        <div className="w-full bg-base-100 px-0 lg:px-5 mt-8">
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
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
                                            <input type="text" name='sellerName' placeholder="Seller Name" defaultValue={user?.displayName} className="input input-bordered" />
                                        </div>
                                        {/* Seller email input */}
                                        <div className="form-control col-span-1">
                                            <label className="label">
                                                <span className="label-text font-bold">Seller Email</span>
                                            </label>
                                            <input type="email" name='sellerEmail' placeholder="Seller Email" defaultValue={user?.email} className="input input-bordered" />
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
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle h-2 w-8">
                        <HiOutlineTrash className='h-6 w-6'></HiOutlineTrash>
                    </button>
                </label>
            </th>
        </tr>
    );
};

export default MyToysTable;