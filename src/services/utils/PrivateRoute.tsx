import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectCurrentToken } from '../../redux-store/auth/authSlice';
import { useSelector } from 'react-redux';
import MainLayout from '../../components/layouts/SideBar';



const PrivateRoutes = () => {

    const location = useLocation();
    const token = useSelector(selectCurrentToken)

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return (
        <MainLayout>
            <Outlet />
        </MainLayout>
    );
};

export default PrivateRoutes;
