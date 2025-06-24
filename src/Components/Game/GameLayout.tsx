import { FC } from 'react'

type GameLayoutProps = {
  Information: React.ReactElement
  Field: React.ReactElement
  handleRestart: () => void
}

const GameLayout: FC<GameLayoutProps> = ({ Information, Field, handleRestart }) => {
  return (
    <div className='flex flex-col'>
      {Information}
      {Field}

      <button
        className='bg-green-400 p-3 text-2xl rounded-3xl mt-5 hover:scale-110 transition-all duration-500 ease-in-out'
        onClick={handleRestart}
      >
        restart game
      </button>
    </div>
  )
}

export default GameLayout
