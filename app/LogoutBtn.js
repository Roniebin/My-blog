'use client'

import { signOut } from 'next-auth/react'


export default function LogoutBtn(props) {
    return (
        <div className="LogoutBtncontainer">
            <span style={{color:"green"}}>{props.name} 님</span>
            <button className="login-btn" onClick={() => {
                signOut()
            }}>로그아웃</button>
        </div>

    )
}