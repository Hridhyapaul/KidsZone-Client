import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Foot from '../../Shared/Footer/Foot';
import AllToys from './AllToys';

const AllToysPage = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div>
                <AllToys></AllToys>
            </div>
            <div>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default AllToysPage;