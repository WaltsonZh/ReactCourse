import React from 'react'

export default function Card({img, rating, reviewCount, country, title, price}) {
    return (
        <div className='Card'>
            <img src={`/src/images/${img}`} />
            <div>
                <img src='/src/images/star.png' />
                <span> {rating}</span>
                <span className='grey'>({reviewCount}) • {country}</span>
            </div>
            <p>{title}</p>
            <p><b>From ${price}</b> / Person</p>
        </div>
    )
}