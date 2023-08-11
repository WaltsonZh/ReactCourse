import React, { useState } from 'react'
import memesData from '../../public/memesData'

export default function Meme() {
    const [memeImage, setMemeImage] = useState('https://i.imgflip.com/3si4.jpg')

    function getImage() {
        let URL = memesData.data.memes[Math.floor(Math.random() * 100)].url
        setMemeImage(URL)
    }

    return (
        <section>
            <div className='Meme'>
                <input type='text' placeholder='Top Text' />
                <input type='text' placeholder='Bottom Text' />
                <button onClick={getImage}>Get a new meme image 🖼️</button>
            </div>
            <img src={memeImage} className='memeImg' />
        </section>
    )
}
