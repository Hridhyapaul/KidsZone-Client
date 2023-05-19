import { useEffect, useState } from "react";

const Gallery = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/images')
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])
    return (
        <div className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-center mb-8">Our <span className="text-[#D268CC]">Gallery</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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