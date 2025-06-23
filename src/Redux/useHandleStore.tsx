import { useEffect, useState, Dispatch } from 'react'
import { store } from './Store'
import type { IInitialState, IAction } from './Reducer'

export const useHandleStore = (): [IInitialState, Dispatch<IAction>] => {
  const [state, setState] = useState<IInitialState>(store.getState())
  const dispatch = store.dispatch

  useEffect(() => {
    const unsub = store.subscribe(() => setState(store.getState()))
    const unsubFn = () => unsub()

    return unsubFn
  }, [])

  return [state, dispatch]
}
