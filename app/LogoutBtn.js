'use client'

import { signOut } from 'next-auth/react'


export default function LogoutBtn(props) {
    return (
        <div>
            {props.name}님
            <button className="login-btn" onClick={() => {
                signOut()
            }}>로그아웃</button>
        </div>

    )
}