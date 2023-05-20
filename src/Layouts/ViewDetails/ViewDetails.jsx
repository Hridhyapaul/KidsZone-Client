import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Foot from '../../Shared/Footer/Foot';
import { Outlet} from 'react-router-dom';

const ViewDetails = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div className='mb-8 lg:my-16'>
                <Outlet></Outlet>
            </div>
            <div>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default ViewDetails;