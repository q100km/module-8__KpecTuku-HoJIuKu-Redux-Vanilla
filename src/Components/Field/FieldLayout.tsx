import { Field } from '../../Types/Types'

type FieldLayoutProps = {
  gameField: Field
  handleNextTurn: (index: number, symbol: string) => void
}

const FieldLayout = ({ gameField, handleNextTurn }: FieldLayoutProps) => {
  return (
    <div className='bg-gray-600 text-green-700 w-full h-full grid grid-cols-3 gap-1 mt-4'>
      {gameField.map((symbol, index) => (
        <div
          key={index}
          onClick={() => handleNextTurn(index, symbol)}
          className='bg-blue-50 w-20 h-20 border-2 flex items-center justify-center font-semibold text-7xl hover:bg-green-300 transition-all duration-500 ease-in-out'
        >
          {symbol}
        </div>
      ))}
    </div>
  )
}

export default FieldLayout
