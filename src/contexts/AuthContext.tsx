import React, {createContext, useState, useEffect} from 'react';
import { getToken } from '../utils/data';
export const AuthContext= createContext(null);
const AuthProvider= ({children})=>{
    return(
        <AuthContext.Provider value={{getToken}}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;
