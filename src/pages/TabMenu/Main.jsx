import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useUserContext } from '../../context/UserContext';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';

export default function Main() {
    const auth = getAuth();
    const [loading, setLoading] = useState(null);
    const { user, logIn, logOut} = useUserContext();
    
    //로그아웃
    const firbaseLogout = () => {
        signOut(auth).then(() => {
            logOut();
            window.location = '/login'; 
          }).catch((error) => {
              console.log(error);
          });
    }

    useEffect(()=>{
        //로그인되어 있는지 체크
        setLoading(true);
        onAuthStateChanged(auth, (userInfo) => {
            if(userInfo){
                logIn(userInfo.email, userInfo.displayName);
                setLoading(false);
            }else{
                logOut()
            }
        })
      
    },[]);

    if(loading) return <Loading />
    return (
        user.isLogin && 
        <>
            <div>
                hi {user.name}
                <button onClick={firbaseLogout}>로그아웃</button> 
                <Link to='/Test'>Test</Link>
            </div>
            <Footer />
        </>
    )
}
