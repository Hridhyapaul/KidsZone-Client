import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../../public/images/error.jpg'
import Navigation from '../../Shared/Navigation/Navigation';
import Foot from '../../Shared/Footer/Foot';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div className='my-16'>
                <img className='w-[50%] mx-auto' src={errorImage} alt="" />
                <section className='flex justify-center items-center '>
                    <div >
                        <h2 className='text-5xl text-center font-semibold'>
                            {error?.message}
                        </h2>
                        <div className='flex justify-center'>
                            <Link to='/'><button className='bg-[#D268CC] text-[white] py-3 px-4 font-semibold rounded-md mt-5'>Back to Homepage</button></Link>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default ErrorPage;