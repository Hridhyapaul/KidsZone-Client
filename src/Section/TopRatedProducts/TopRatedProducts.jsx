import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProductsCard from './TopProductsCard';

const TopRatedProducts = () => {
    const [topProducts, setTopProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/topRated')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTopProducts(data)
            })
    }, [])
    // React.useEffect(() => {
    //     AOS.init();
    // }, []);
    return (
        <section className="lg:max-w-[1100px] mx-auto py-12">
            <div className="container mx-auto px-4 lg:px-0">
                <h2 className="text-2xl lg:text-5xl font-bold text-center lg:mb-20 mb-8 mt-4 lg:mt-14">Top Rated <span className='text-[#D268CC]'>Products</span></h2>
                <div data-aos="fade-down">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {
                            topProducts.map(topProduct => <TopProductsCard key={topProduct._id} topProduct={topProduct}></TopProductsCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopRatedProducts;