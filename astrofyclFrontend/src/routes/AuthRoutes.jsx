import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = ({ isLoggedIn }) => {
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoute;
