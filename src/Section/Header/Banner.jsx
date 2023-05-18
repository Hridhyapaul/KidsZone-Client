import image1 from '../../../public/images/image1.jpg'
import image2 from '../../../public/images/image2.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] object-cover">
            {/* Slider--01 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image2} className="w-full rounded-md object-cover" />
                <div className="absolute rounded-md flex items-center h-full w-full left-0  top-0 bg-gradient-to-r from-[#0c0c0c] to-[rgba(22, 22, 22, 0)]">
                    <div className=''>
                        <div className='space-y-8 w-full pl-28'>
                            <div>
                                <button className="rounded text-white bg-[#FF6799] hover:bg-[#f34d85] border-0 text-2xl px-8 py-5">Big Discount</button>
                            </div>
                            <p className='text-white text-8xl font-extrabold'>KIDS OFFER</p>
                            <p className='text-5xl text-white'>We make your children happier <br />
                                with the best toys</p>
                            <div>
                                <button className="rounded-full text-white bg-[#FF6799] hover:bg-[#f34d85] border-0 text-xl px-8 py-3">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-4 transform -translate-y-1/2 left-14 right-14 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* Slider--02 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image1} className="w-full rounded-md object-cover" />
                <div className="absolute rounded-md flex items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className=''>
                        <div className='space-y-8 w-full pl-28'>
                            <div>
                                <button className="rounded text-white bg-[#FF6799] hover:bg-[#f34d85] border-0 text-2xl px-8 py-5">Big Discount</button>
                            </div>
                            <p className='text-white text-8xl font-extrabold'>KIDS OFFER</p>
                            <p className='text-5xl text-white'>We make your children happier <br />
                                with the best toys</p>
                            <div>
                                <button className="rounded-full text-white bg-[#FF6799] hover:bg-[#f34d85] border-0 text-xl px-8 py-3">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between gap-4 transform -translate-y-1/2 left-14 right-14 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;