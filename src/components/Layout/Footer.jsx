import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <ul>
                <li><Link to='/'>메인</Link></li>
                <li><Link to='/Notice'>게시판</Link></li>
                <li><Link to='/Chat'>채팅</Link></li>
                <li><Link to='/Mypage'>마이페이지</Link></li>
            </ul>
        </footer>
    )
}
