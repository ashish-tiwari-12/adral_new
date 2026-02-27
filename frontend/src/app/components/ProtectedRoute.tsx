import React from 'react';
import { Navigate, Outlet } from 'react-router';

interface ProtectedRouteProps {
    requireAdmin?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requireAdmin = false }) => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (!token || !userStr) {
        // Not logged in
        return <Navigate to="/login" replace />;
    }

    try {
        const user = JSON.parse(userStr);

        if (requireAdmin && user.role !== 'admin') {
            // Not an admin
            return <Navigate to="/" replace />;
        }

        return <Outlet />;
    } catch (e) {
        // Data corruption
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        return <Navigate to="/login" replace />;
    }
};
