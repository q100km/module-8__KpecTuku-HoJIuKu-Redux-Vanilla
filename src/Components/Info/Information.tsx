import { ReactElement } from 'react'
import InformationLayout from './InformationLayout'

const Information = () => {
  const showInfoText = (text: string): ReactElement => (
    <span className='text-3xl text-green-500'>{text}</span>
  )

  return <InformationLayout showInfoText={showInfoText} />
}

export default Information
