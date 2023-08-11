import React, { useState } from 'react'
import memesData from '../../public/memesData'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/3si4.jpg'
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)

    function getImage() {
        let URL = allMemeImages.data.memes[Math.floor(Math.random() * 100)].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: URL
        }))
    }

    return (
        <section>
            <div className='Meme'>
                <input type='text' placeholder='Top Text' />
                <input type='text' placeholder='Bottom Text' />
                <button onClick={getImage}>Get a new meme image 🖼️</button>
            </div>
            <img src={meme.randomImage} className='memeImg' />
        </section>
    )
}
