import React, {useState} from 'react'
import InputLabel from '../components/InputLabel';
import AuthBtn from '../components/AuthBtn'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { useUserContext } from '../context/UserContext';

export default function Login() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const { logIn } = useUserContext();

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
    return (
        <>
            로그인이 필요합니다!
            <InputLabel type="text" name="id" placeholder="id" label="id" defaultValue={id} onChange={(e)=>setId(e.target.value)}/>
            <InputLabel type="password" name="id" placeholder="pw" label="pw" defaultValue={password} onChange={(e)=>setPassword(e.target.value)} />
            <AuthBtn onClick={handleLogin}>로그인</AuthBtn>
        </>
    )
}
