import React from 'react'

export default function AuthBtn({children, onClick}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}
