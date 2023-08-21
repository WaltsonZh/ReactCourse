import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './components/Die'

export default function App() {
  const [dice, setDice] = useState(allNewDice())
  const diceElements = dice.map((die) => {
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  })

  function allNewDice() {
    const randomArray = []
    for (let i = 0; i < 10; i++) {
      randomArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      })
    }
    return randomArray
  }

  function rollDice() {
    setDice(allNewDice)
  }

  function holdDice(id) {
    console.log(id)
  }

  return (
    <div className='App'>
      <div className='frame'>
        <h1>Tenzies</h1>
        <h4>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h4>
        <div className='dice-container'>{diceElements}</div>
        <button className='rollBtn' onClick={rollDice}>
          Roll
        </button>
      </div>
    </div>
  )
}
