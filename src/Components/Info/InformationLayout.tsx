import { FC } from 'react'

type InformationLayoutProps = {
  text: string
  showInfoText: (text: string) => React.ReactElement
}

const InformationLayout: FC<InformationLayoutProps> = ({ text, showInfoText }) => {
  return showInfoText(text)
}

export default InformationLayout
