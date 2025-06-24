import { useHandleStore } from '../../Redux/useHandleStore'
import { Actions as a } from '../../Redux/Actions'
import { WIN_PATTERNS } from '../../Constants/Constants'
import type { Field as FieldType } from '../../Types/Types'
import FieldLayout from './FieldLayout'

const Field = () => {
  const [state, dispatch] = useHandleStore()
  const { gameField, currentPlayer, isGameEndedFlag } = state

  const checkWinner = (updatedField: FieldType): void => {
    WIN_PATTERNS.forEach(([indx1, indx2, indx3]) => {
      const winCombo =
        updatedField[indx1] === currentPlayer &&
        updatedField[indx2] === currentPlayer &&
        updatedField[indx3] === currentPlayer

      if (winCombo) {
        dispatch({ type: a.SET_ISGAME_ENDED, payload: true })
      }
    })

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

  return <FieldLayout gameField={gameField} handleNextTurn={handleNextTurn} />
}

export default Field
