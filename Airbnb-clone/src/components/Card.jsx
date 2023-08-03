import React from 'react'

export default function Card() {
    return (
        <div className='Card'>
            <img src='/src/images/Katie-Zaferes.png' />
            <div>
                <img src='/src/images/star.png' />
                <span> 5.0</span>
                <span className='grey'>(6) • USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b> / Person</p>
        </div>
    )
}