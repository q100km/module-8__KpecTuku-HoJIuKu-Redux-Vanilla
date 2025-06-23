import { initField } from '../Constants/Constants'
import { Actions as a } from './Actions'
import type { Player, Field } from '../Types/Types'

export interface IInitialState {
  gameField: Field
  currentPlayer: Player
  isGameEndedFlag: boolean
  isDrawFlag: boolean
}

export interface IAction {
  type: string
  payload?: any
}

export const initialState: IInitialState = {
  gameField: initField,
  currentPlayer: 'Х',
  isGameEndedFlag: false,
  isDrawFlag: false,
}

export const reducer = (state: IInitialState = initialState, action: IAction): IInitialState => {
  const { type, payload } = action

  if (type === a.SET_GAME_FIELD) return { ...state, gameField: payload }

  if (type === a.SET_CURRENT_PLAYER) return { ...state, currentPlayer: payload }

  if (type === a.SET_ISGAME_ENDED) return { ...state, isGameEndedFlag: payload }

  if (type === a.SET_ISDRAW) return { ...state, isDrawFlag: payload }

  if (type === a.RESTART_GAME) return initialState

  return state
  //
}
