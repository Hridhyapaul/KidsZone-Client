import React from 'react';
import useTitle from '../../CustomHook/useTitle';

const AddToys = () => {
    useTitle('Add Toys')
    const handleAddProduct = (event) => {
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
        const newProducts = {
            name, image, sellerName, sellerEmail, subCategory, price, rating, quantity, details
        }
        console.log(newProducts)
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProducts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div className=''>
            <div className=" min-h-screen">
                <div className="">
                    <div className="text-center lg:text-center mt-8">
                        <h1 className="text-5xl font-bold">Add Your <span className='text-[#D268CC]'>Products</span></h1>
                    </div>
                    <div className="w-full bg-base-100 px-5 mt-8">
                        <div className="card-body">
                            <form onSubmit={handleAddProduct}>
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
                                    <input className='btn btn-primary bg-[#D268CC] hover:bg-[#bd5cb8] border-0 mb-3 mt-3' type="submit" value="Add Product" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToys;