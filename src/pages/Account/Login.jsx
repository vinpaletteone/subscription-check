import React, {useState} from 'react'
import InputLabel from '../../components/InputLabel';
import AuthBtn from '../../components/AuthBtn'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { useUserContext } from '../../context/UserContext';
import Loading from '../../components/Loading';

export default function Login() {
    const [id, setId] = useState('');
    const [loading, setLoading] = useState(null);
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const { user, logIn } = useUserContext();

    const handleLogin = () => {
        setLoading(true);
        signInWithEmailAndPassword(auth, id, password)
        .then((data) => {
            console.log('data', data.user);
            setLoading(false);
            logIn(data.user.email, data.user.displayName)
            window.location = '/'; 
        })
        .catch((error) => {
            console.log(error.code, error.message);
        });
    }

    if(loading) return <Loading />

    return (
        !user.isLogin && 
            <>
                <InputLabel type="text" name="id" placeholder="id" label="id" defaultValue={id} onChange={(e)=>setId(e.target.value)}/>
                <InputLabel type="password" name="id" placeholder="pw" label="pw" defaultValue={password} onChange={(e)=>setPassword(e.target.value)} />
                <AuthBtn onClick={handleLogin}>로그인</AuthBtn>
            </> 
    )
}
