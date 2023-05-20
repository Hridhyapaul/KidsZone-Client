import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 relative">
                    <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-[#D268CC] animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-[#ec8de8] opacity-50 animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-[#f7cbf4] opacity-25 animate-pulse"></div>
                </div>
                <p className="mt-4 text-[#D268CC] text-2xl font-bold">Loading...</p>
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace ></Navigate>
};

export default PrivateRoute;