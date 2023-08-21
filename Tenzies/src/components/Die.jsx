export default function Die({ value, isHeld, holdDice }) {
  const style = {
    background: isHeld ? 'hsl(144, 71%, 62%)' : '',
  }

  return (
    <button className='Die' style={style} onClick={holdDice}>
      {value}
    </button>
  )
}
