import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysTable from './MyToysTable';
import useTitle from '../../CustomHook/useTitle';

const MyToys = () => {
    useTitle('My Toys')
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`https://kids-zone-server-indol.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyToys(data)
            })
    }, [user])
    return (
        <div className="overflow-x-auto max-w-[1100px] lg:mx-auto mx-5 my-10 lg:my-16">
            <h1 className='text-2xl lg:text-5xl font-bold text-center mb-10 lg:mb-16 sticky'>My Toys</h1>
            <div className='mb-8'>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>Sort the toys based on price</option>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Image</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Quantity</th>
                        <th>Details</th>
                        <th>Action</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys.map(singleToy => <MyToysTable key={singleToy._id} singleToy={singleToy} setMyToys={setMyToys} myToys={myToys}></MyToysTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;