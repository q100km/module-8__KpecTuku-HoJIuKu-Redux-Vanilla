import { useHandleStore } from '../../Redux/useHandleStore'
import InformationLayout from './InformationLayout'
import { ReactElement } from 'react'

const Information = () => {
  const [state] = useHandleStore()
  const { isDrawFlag, currentPlayer, isGameEndedFlag } = state

  const showInfoText = (text: string): ReactElement => (
    <span className='text-3xl text-green-500'>{text}</span>
  )

  let text = ''

  if (isDrawFlag) {
    text = 'Ничья'
  } else if (isGameEndedFlag) {
    text = `Победа игрока : ${currentPlayer === 'Х' ? 'O' : 'Х'}`
  } else {
    text = `Ходит игрок : ${currentPlayer}`
  }

  return <InformationLayout showInfoText={showInfoText} text={text} />
}

export default Information
