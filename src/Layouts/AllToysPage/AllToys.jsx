import React, { useEffect, useState } from 'react';
import AllToysTable from './AllToysTable';
import useTitle from '../../CustomHook/useTitle';

const AllToys = () => {
    useTitle('All Toys')
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("")
    console.log(searchText)
    useEffect(() => {
        fetch('https://kids-zone-server-indol.vercel.app/allToys')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToys(data)
            })
    }, [])

    const handleSearch = () => {
        fetch(`http://localhost:3000/toySearch/${searchText}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setToys(data)
        })
    }
    return (
        <div className="overflow-x-auto max-w-[1100px] lg:mx-auto mx-5 my-10 lg:my-16">
            <h1 className='text-2xl lg:text-5xl font-bold text-center mb-10 lg:mb-16 sticky'>All Toys</h1>

            {/* Search input */}
            <div className='flex justify-center mb-5'>
                <div className="form-control">
                    <div className="input-group w-full">
                        <input onChange={(event) => setSearchText(event.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Table */}
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th className='text-[16px]'>Seller Name & Email</th>
                        <th className='text-[16px]'>Toy Name & Sub-Category</th>
                        <th className='text-[16px]'>Price</th>
                        <th className='text-[16px]'>Quantity</th>
                        <th className='text-[16px]'>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <AllToysTable key={toy._id} toy={toy}></AllToysTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;