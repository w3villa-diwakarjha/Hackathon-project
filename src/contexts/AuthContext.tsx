import React, { createContext, useState, useEffect } from 'react';
import { getToken } from '../utils/data';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const storedToken = getToken();
        // const account = getIsAccount();
        // const checkhome=getIsHome();
        // const myDomain=getDomain();
        if (storedToken) {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn, getToken()]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
