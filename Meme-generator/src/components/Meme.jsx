import React, { useState, useEffect } from 'react'

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/3si4.jpg',
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getImage() {
        let URL = allMemes[Math.floor(Math.random() * 100)].url
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: URL,
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }))
    }

    return (
        <section>
            <div className='form'>
                <input type='text' placeholder='Top Text' name='topText' onChange={handleChange} value={meme.topText} />
                <input type='text' placeholder='Bottom Text' name='bottomText' onChange={handleChange} value={meme.bottomText} />
                <button onClick={getImage}>Get a new meme image 🖼️</button>
            </div>
            <div className='meme'>
                <img src={meme.randomImage} className='memeImg' />
                <h2 className='memeText top'>{meme.topText}</h2>
                <h2 className='memeText bottom'>{meme.bottomText}</h2>
            </div>
        </section>
    )
}
