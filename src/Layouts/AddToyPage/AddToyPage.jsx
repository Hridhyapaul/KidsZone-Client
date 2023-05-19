import React from 'react';
import AddToys from '../../Pages/AddToys/AddToys';
import Navigation from '../../Shared/Navigation/Navigation';
import Foot from '../../Shared/Footer/Foot';

const AddToyPage = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div>
                <AddToys></AddToys>
            </div>
            <div>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default AddToyPage;