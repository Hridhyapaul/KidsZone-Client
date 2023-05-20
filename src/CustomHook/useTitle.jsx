import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `KidsZone | ${title}`;
    }, [title]);
};

export default useTitle;