'use client'
import { createContext, useContext, useState } from "react";

type Auth = {
    user: {
        [key: string]: any;
    };
    setUser(user: object): void;
    loged:boolean;
    setLoged:void
}



const AuthContext = createContext<Auth>( {
    user: {},
    setUser: () => {},
    loged:,
    setLoged: () => {}
} );

export const AuthProvider = (props:{children:any}) => {
    const [user, setUser] = useState({});
    const [loged, setLoged] = useState(false);
    return (
        <AuthContext.Provider value={{user, setUser}, {loged, setLoged}} >
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