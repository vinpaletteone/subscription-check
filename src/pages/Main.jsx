import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useUserContext } from '../context/UserContext';
import Loading from '../components/Loading';

export default function Main() {
    const auth = getAuth();
    const [loading, setLoading] = useState(true);
    const { user, logIn, logOut } = useUserContext();
    const firbaseLogout = () => {
        signOut(auth).then(() => {
            logOut();
            window.location = '/login'; 
          }).catch((error) => {
              console.log(error);
          });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (userInfo) => {
            if(userInfo){
                logIn(userInfo.email, userInfo.displayName);
                setLoading(false);
            }
        })
    },[]);

    return (
        <div>
            {loading ? <Loading /> : `hi ${user.name}` }
            { user.isLogin && <button onClick={firbaseLogout}>로그아웃</button> }
        </div>
    )
}
