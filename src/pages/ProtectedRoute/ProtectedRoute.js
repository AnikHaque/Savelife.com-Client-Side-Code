import React from 'react';
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';

const { useLocation, Navigate } = require("react-router-dom");
const ProtectedRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    // const token = localStorage.getItem(('token'))
    let location = useLocation();
    if (loading) return
    if (!user?.email) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        // localStorage.removeItem('token')
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;