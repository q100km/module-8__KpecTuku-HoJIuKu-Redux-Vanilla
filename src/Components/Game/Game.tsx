import Field from '../Field/Field'
import Information from '../Info/Information'
import GameLayout from './GameLayout'
import { useHandleStore } from '../../Redux/useHandleStore'
import { Actions as a } from '../../Redux/Actions'

const Game = () => {
  const [state, dispatch] = useHandleStore()

  const handleRestart = (): void => {
    dispatch({ type: a.RESTART_GAME })
  }

  return (
    <GameLayout Information={<Information />} Field={<Field />} handleRestart={handleRestart} />
  )
}

export default Game
