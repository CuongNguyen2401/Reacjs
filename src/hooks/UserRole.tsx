// RoleBasedRoute.tsx
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Role } from "../Model/Role";
import { RootState } from './../store/Store';

interface UserRole {
    children: JSX.Element;
    requiredRole: Role;
}

const RoleBasedRoute: React.FC<UserRole> = ({ children, requiredRole }) => {
    const { user, role, loading } = useSelector((state: RootState) => state.auth);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (role === requiredRole) {
        console.log('User has the required role:', role === requiredRole);
        return children;
    } else {
        return <Navigate to="/not-found" replace />;
    }
};

export default RoleBasedRoute;
