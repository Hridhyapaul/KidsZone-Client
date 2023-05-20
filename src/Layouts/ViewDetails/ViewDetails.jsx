import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Foot from '../../Shared/Footer/Foot';
import Details from './Details';

const ViewDetails = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div>
                <Details></Details>
            </div>
            <div>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default ViewDetails;