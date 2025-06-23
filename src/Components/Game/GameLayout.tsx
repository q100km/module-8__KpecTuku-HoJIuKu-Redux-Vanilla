import { FC } from 'react'
import { useHandleStore } from '../../Redux/useHandleStore'
import { Actions as a } from '../../Redux/Actions'

type GameLayoutProps = {
  Information: React.ReactElement
  Field: React.ReactElement
}

const GameLayout: FC<GameLayoutProps> = ({ Information, Field }) => {
  //
  const [state, dispatch] = useHandleStore()

  const handleRestart = (): void => {
    dispatch({ type: a.RESTART_GAME })
  }
  //
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
