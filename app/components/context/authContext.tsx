'use client'
import { createContext, useContext, useState } from "react";

type Auth = {
    user: {
        [key: string]: any;
    };
    setUser(user: object): void;
}

const AuthContext = createContext<Auth>( {
    user: {},
    setUser: () => {}
} );

export const AuthProvider = (props:{children:any}) => {
    const [user, setUser] = useState({});
    return (
        <AuthContext.Provider value={{user, setUser}} >
            {props.children}
        </AuthContext.Provider>
    );
}

export const useAuth = (): Auth => {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw Error(`useAuth mush be used within an AuthProvider`);
    }
    return auth;
}