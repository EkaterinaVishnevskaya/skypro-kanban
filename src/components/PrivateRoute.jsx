import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../services/auth";

function PrivateRoute(){
    const token = getToken();
    if (!token) {
        return <Navigate to='/signin' replace></Navigate>
    }
    return <Outlet></Outlet>
}

export default PrivateRoute;