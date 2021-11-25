import React, {useState, useEffect} from 'react'
import InputLabel from '../components/InputLabel';
import AuthBtn from '../components/AuthBtn'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { useUserContext } from '../context/UserContext';
import Main from './Main';

export default function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const { user, logIn } = useUserContext();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, id, password)
        .then((userCredential) => {
            console.log('userCredential', userCredential);
            window.location = '/'; 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode, errorMessage);
        });
    }

    useEffect(() => {
        console.log(user.isLogin);
     
    }, [])
    return (
        <>
            {user.isLogin || 
            <>
                <InputLabel type="text" name="id" placeholder="id" label="id" defaultValue={id} onChange={(e)=>setId(e.target.value)}/>
                <InputLabel type="password" name="id" placeholder="pw" label="pw" defaultValue={password} onChange={(e)=>setPassword(e.target.value)} />
                <AuthBtn onClick={handleLogin}>로그인</AuthBtn>
            </> }
        </>
    )
}
