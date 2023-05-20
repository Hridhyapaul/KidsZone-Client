import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Foot from '../../Shared/Footer/Foot';
import MyToys from './MyToys';

const MyToysPage = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div>
                <MyToys></MyToys>
            </div>
            <div>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default MyToysPage;