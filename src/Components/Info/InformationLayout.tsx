import { FC } from 'react'
import { useHandleStore } from '../../Redux/useHandleStore'

type InformationLayoutProps = {
  showInfoText: (text: string) => React.ReactElement
}

const InformationLayout: FC<InformationLayoutProps> = ({ showInfoText }) => {
  //
  const [state, dispatch] = useHandleStore()
  const { isDrawFlag, currentPlayer, isGameEndedFlag } = state

  if (isDrawFlag) {
    return showInfoText(`Ничья`)
  }

  if (!isDrawFlag && isGameEndedFlag) {
    return showInfoText(`Победа игрока : ${currentPlayer === 'Х' ? 'O' : 'Х'}`)
  }

  if (!isDrawFlag && !isGameEndedFlag) {
    return showInfoText(`Ходит игрок : ${currentPlayer}`)
  }
  //
}

export default InformationLayout
