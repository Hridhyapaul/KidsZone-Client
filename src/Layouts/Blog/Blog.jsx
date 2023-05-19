import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Foot from '../../Shared/Footer/Foot';
import Faq from './FAQ.JSX';

const Blog = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div>
                <Faq></Faq>
            </div>
            <div>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default Blog;