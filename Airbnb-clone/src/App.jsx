import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data'

export default function App() {
    const cards = cardData.map((data) => {
        return <Card key={data.id} {...data} />
    })

    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <section className='cardList'>{cards}</section>
        </div>
    )
}
