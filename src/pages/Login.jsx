import React from 'react'
import InputLabel from '../components/InputLabel';
import AuthBtn from '../components/AuthBtn'

export default function Login() {
    const handleLogin = () => {
        
    }
    return (
        <>
            로그인이 필요합니다!
            <InputLabel type="text" name="id" placeholder="id" label="id" />
            <InputLabel type="password" name="id" placeholder="pw" label="pw" />
            <AuthBtn onClick={handleLogin}>로그인</AuthBtn>
        </>
    )
}
