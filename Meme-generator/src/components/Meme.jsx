import React from 'react'
import memesData from '../../public/memesData'

export default function Meme() {

    function getImage() {
        let URL = memesData.data.memes[Math.floor(Math.random() * 100)].url
        console.log(URL)
    }

    return (
        <section className='Meme'>
            <input type='text' placeholder='Top Text' />
            <input type='text' placeholder='Bottom Text' />
            <button onClick={getImage}>Get a new meme image 🖼️</button>
        </section>
    )
}
