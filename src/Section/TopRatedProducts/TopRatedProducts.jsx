import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProductsCard from './TopProductsCard';

const TopRatedProducts = () => {
    const [topProducts, setTopProducts] = useState([])
    useEffect(() => {
        fetch('https://kids-zone-server-indol.vercel.app/topRated')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTopProducts(data)
            })
    }, [])
    React.useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='max-w-[1100px] lg:mx-auto mx-4 my-16 ' data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <h1 className='lg:text-5xl text-2xl font-bold text-center'>Top Rated <span className='text-[#D268CC]'>Products</span></h1>
            <div className='grid grid-col-1 lg:grid-cols-3 gap-4 mt-10 lg:mt-16'>
                {
                    topProducts.map(topProduct => <TopProductsCard key={topProduct._id} topProduct={topProduct}></TopProductsCard>)
                }
            </div>
        </div>
    );
};

export default TopRatedProducts;