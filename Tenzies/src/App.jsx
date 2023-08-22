import { useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './components/Die'
import Confetti from 'react-confetti'

export default function App() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)
  const [rolls, setRolls] = useState(0)
  const [time, setTime] = useState(0)
  const [play, setPlay] = useState(false)
  const timer = useRef()
  const [best, setBest] = useState(0)

  const diceElements = dice.map((die) => {
    return <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
  })

  useEffect(() => {
    if (dice.every((die) => die.isHeld && die.value === dice[0].value)) {
      setTenzies(true)
      setPlay(false)
    }
  }, [dice])

  useEffect(() => {
    if (play === true) {
      startTimer()
    } else {
      clearInterval(timer.current)
      const tmp = localStorage.getItem('best')
      if (tmp === null) {
        localStorage.setItem('best', time)
        setBest(time)
      } else if ((tmp === '0' || parseInt(tmp) >= time) && time !== 0) {
        localStorage.setItem('best', time)
        setBest(time)
      } else {
        setBest(parseInt(localStorage.getItem('best')))
      }
      timer.current = 0
    }
  }, [play])

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
    setDice((preDice) =>
      preDice.map((die) => {
        return die.isHeld === false ? { ...die, value: Math.ceil(Math.random() * 6) } : die
      })
    )
    setRolls((preRolls) => preRolls + 1)
    setPlay(true)
  }

  function holdDice(id) {
    setDice((preDice) =>
      preDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    )
    setPlay(true)
  }

  function newGame() {
    setDice(allNewDice)
    setTenzies(false)
    setRolls(0)
    setTime(0)
  }

  function startTimer() {
    timer.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 1000)
  }

  function formatTime(time) {
    const sec = time % 60
    const min = Math.floor(time / 60)
    return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`
  }

  return (
    <div className='App'>
      {tenzies && <Confetti />}
      <div className='frame'>
        <h1>Tenzies</h1>
        <h4>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</h4>
        <div className='dice-container'>{diceElements}</div>
        <div className='container'>
          <button onClick={tenzies ? newGame : rollDice}>{tenzies ? 'New Game' : 'Roll'}</button>
          <p className='rolls'>Rolls: {rolls}</p>
          <p className='time'>
            Time used: {formatTime(time)} {tenzies ? <span className='time'>Best: {formatTime(best)}</span> : ''}
          </p>
        </div>
      </div>
    </div>
  )
}
