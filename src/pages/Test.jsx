import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, {useEffect} from 'react'
import { useUserContext } from '../context/UserContext'

export default function Test() {
    const auth = getAuth();
    const {user} = useUserContext();
    console.log(user);
    useEffect(()=>{
        onAuthStateChanged(auth, (userInfo) => {
            console.log(userInfo);
        });
    })
    return (
        <div>
            {user.name}
        </div>
    )
}
