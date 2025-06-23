import { useHandleStore } from '../../Redux/useHandleStore'
import { Actions as a } from '../../Redux/Actions'
import { WIN_PATTERNS } from '../../Constants/Constants'
import type { Field } from '../../Types/Types'

const FieldLayout = () => {
  const [state, dispatch] = useHandleStore()
  const { gameField, currentPlayer, isGameEndedFlag } = state

  const checkWinner = (updatedField: Field): void => {
    WIN_PATTERNS.forEach(([indx1, indx2, indx3]) => {
      const winCombo =
        updatedField[indx1] === currentPlayer &&
        updatedField[indx2] === currentPlayer &&
        updatedField[indx3] === currentPlayer

      // win
      if (winCombo) {
        dispatch({ type: a.SET_ISGAME_ENDED, payload: true })
      }
    })

    //  draw
    const fieldIsFull = updatedField.every((symbol) => symbol !== '')
    if (!isGameEndedFlag && fieldIsFull) {
      dispatch({ type: a.SET_ISDRAW, payload: true })
      dispatch({ type: a.SET_ISGAME_ENDED, payload: true })
    }
  }

  const handleNextTurn = (index: number, symbol: string): void => {
    if (symbol === '' && !isGameEndedFlag) {
      const updatedField = [...gameField]
      updatedField[index] = currentPlayer

      dispatch({ type: a.SET_GAME_FIELD, payload: updatedField })

      checkWinner(updatedField)

      const nextPlayer = currentPlayer === 'Х' ? 'O' : 'Х'
      dispatch({ type: a.SET_CURRENT_PLAYER, payload: nextPlayer })
    }
  }

  //
  return (
    <div className='bg-gray-600 text-green-700 w-full h-full grid grid-cols-3 gap-1 mt-4'>
      {gameField.map((symbol: string, index: number) => (
        <div
          key={index}
          onClick={() => handleNextTurn(index, symbol)}
          className='bg-blue-50 w-20 h-20 border-2  flex items-center justify-center font-semibold text-7xl hover:bg-green-300 transition-all duration-500 ease-in-out'
        >
          {symbol}
        </div>
      ))}
    </div>
  )
}

export default FieldLayout
