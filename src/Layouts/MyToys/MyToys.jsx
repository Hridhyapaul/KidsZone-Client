import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysTable from './MyToysTable';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyToys(data)
            })
    }, [user])
    return (
            <div className="overflow-x-auto max-w-[1100px] lg:mx-auto mx-5 my-10 lg:my-16">
                <h1 className='text-2xl lg:text-5xl font-bold text-center mb-10 lg:mb-16 sticky'>All Toys</h1>
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Delete</th>
                                <th>Toy Name</th>
                                <th>Sub-Category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Details</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map(singleToy => <MyToysTable key={singleToy._id} singleToy={singleToy}></MyToysTable>)
                            }
                        </tbody>
                    </table>
            </div>
    );
};

export default MyToys;