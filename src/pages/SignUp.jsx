import React, { useState } from 'react'
import InputLabel from '../components/InputLabel'
import AuthBtn from '../components/AuthBtn'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


export default function SignUp() {
    const auth = getAuth();
    
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

   
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
                // Profile updated!
                // ...
                window.location = '/'; 
                
              }).catch((error) => {
                // An error occurred
                // ...
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
