import { useEffect, useState } from "react";

const Gallery = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://kids-zone-server-indol.vercel.app/images')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div className="py-8">
            <div className="max-w-[1100px] lg:mx-auto mx-4">
                <h2 className="text-2xl lg:text-5xl font-bold text-center lg:mb-16 mb-8 mt-4 lg:mt-14">Our <span className="text-[#D268CC]">Gallery</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover object-top rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;