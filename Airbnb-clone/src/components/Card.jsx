import React from 'react'

export default function Card(data) {
    let badgeText
    if (data.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (data.location === 'Online') {
        badgeText = 'Online'
    }

    return (
        <div className='Card'>
            {badgeText && <div className='Card-badge'>{badgeText}</div>}
            <img src={`/images/${data.coverImg}`} />
            <div>
                <img src='/images/star.png' />
                <span> {data.stats.rating} </span>
                <span className='grey'>
                    ({data.stats.reviewCount}) • {data.location}
                </span>
            </div>
            <p>{data.title}</p>
            <p>
                <b>From ${data.price}</b> / Person
            </p>
        </div>
    )
}
