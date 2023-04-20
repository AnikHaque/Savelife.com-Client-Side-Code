import React from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useRole from '../hooks/useRole';
import NotAuthorized from '../pages/NotAuthorized/NotAuthorized';
import { Footer } from '../shared/Footer/Footer';
import { NavigationBar } from '../shared/NavigationBar/NavigationBar';

const RouteAthenication = (ChildComponent, givenRole) => function HOC() {
    const [userInfo, loading] = useAuthState(auth);
    const currentRole = useRole(userInfo?.email);
    // useEffect(() => {
    // }, [loading, userInfo.email])
    console.log("currentRole", currentRole);
    console.log("givenRole", givenRole);
    if (loading === true) {
        return
    }
    return (
        <>
            {
                currentRole === givenRole ? <>
                    <NavigationBar isHome={true} />
                    <ChildComponent />
                    <Footer />
                </> : <NotAuthorized />
            }
        </>
    );
};

export default RouteAthenication;