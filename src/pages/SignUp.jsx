import React, { useState } from 'react'
import InputLabel from '../components/InputLabel'
import AuthBtn from '../components/AuthBtn'
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useUserContext } from '../context/UserContext';


export default function SignUp() {
    const auth = getAuth();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { logIn } = useUserContext();

   
    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, id, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('userCredential', userCredential)
            console.log('user', user)

            updateProfile(auth.currentUser, {
                displayName: name,
              }).then(() => {
                signInWithEmailAndPassword(auth, id, password)
                logIn({id:id, name:name})
                window.location = '/'; 
              }).catch((error) => {
                  console.log(error.message);
              });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`errorCode ${errorCode}, errorMessage ${errorMessage}`)
            // ..
        });
    }

    return (
        <div>
            회원가입@
            <form>
                <InputLabel type="text" name="name" placeholder="name" label="name" defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
                <InputLabel type="text" defaultValue={id} placeholder="id" label="id" onChange={(e)=>setId(e.target.value)} />
                <InputLabel type="text" defaultValue={password} placeholder="pw" label="pw" onChange={(e)=>setPassword(e.target.value)} />
                <InputLabel type="text" name="rePw" placeholder="rePw" label="rePw" />
                <AuthBtn onClick={handleSignUp}>회원가입</AuthBtn>
                {/* <button onClick={handleSignUp}>dd</button> */}
            </form>
        </div>
    )
}

//아이디 이메일 형식인지 체크 에러처리 대응
//비밀번호 6자리 이상인지 체크
//비밀번호 + 비밀번호 확인 값이 같은지 체크
//이름이 한글인지 체크
//회원가입시 자동 로그인하기