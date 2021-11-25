import React, { createContext, useContext, useState } from "react";

export const userContext = createContext({
    user: null,
    logIn: () => {},
    logOut: () => {},
});

const USER = { id:'a', name:'', isLogin: false};

export function UserContextProvider({children}){
    const [user, setUser] = useState(USER);
    function logIn(userId, userName){
        setUser({ id:userId, name: userName, isLogin: true,  });
    }
    function logOut(){ setUser(USER); }

    return (
        <userContext.Provider value={{user, logIn, logOut}}>
            {children}
        </userContext.Provider>
    )
}

export function useUserContext(){
    const {user, logIn, logOut} = useContext(userContext);
    return {user, logIn, logOut}
}
