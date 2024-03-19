'use client'
import { createContext, useContext, useState } from "react";

type Context = {
    user: {
        [key: string]: any;
    };
    setUser(user: object): void;
    activeHeader: string;
    setActiveHeader(activeHeader: string): void; 
    logState: boolean;
    setLogState(logState:boolean):void;
}

export const Context = createContext<Context>( {
    user: {},
    setUser: () => {},
    activeHeader: '',
    setActiveHeader: () => {},
    logState: false,
    setLogState: ()=>{}
} );

export const ContextProvider = (props:{children:any}) => {
    const [user, setUser] = useState({});
    const [activeHeader, setActiveHeader] = useState("Home");
    const [logState, setLogState] = useState(false)
    return (
        <Context.Provider value={{user, setUser, activeHeader, setActiveHeader, logState, setLogState}} >
            {props.children}
        </Context.Provider>
    );
}

export const useAuth = (): Context => {
    const auth = useContext(Context);
    if (!auth) {
        throw Error(`useAuth mush be used within an ContextProvider`);
    }
    return auth;
}