'use client'
import { useState } from 'react'

export default function Calculator() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleClick = (value: string) => {
    setInput((prev) => prev + value)
  }

  const clear = () => {
    setInput('')
    setResult('')
  }

  const calculate = () => {
    try {
      // Replace % with /100 before evaluation
      const expression = input.replace(/(\d+(\.\d+)?)%/g, '($1/100)')
      const evalResult = eval(expression)
      setResult(evalResult)
    } catch {
      setResult('Error')
    }
  }

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1))
  }

  const handlePercentage = () => {
    if (input === '') {
      setInput('0%')
      return
    }
    
    // If the last character is an operator, add 0%
    if (['+', '-', '*', '/'].includes(input.slice(-1))) {
      setInput(prev => prev + '0%')
      return
    }
    
    // Otherwise, add % to the current number
    setInput(prev => {
      const parts = prev.split(/([+\-*/])/g)
      const lastPart = parts[parts.length - 1]
      
      if (lastPart.includes('%')) return prev
      
      parts[parts.length - 1] = lastPart + '%'
      return parts.join('')
    })
  }

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    '%', 'C', '×'
  ]

  return (
    <div className="w-full px-4 pb-10">
      <div className="flex flex-col lg:flex-row gap-6 p-4 bg-white rounded-2xl shadow-2xl mx-auto w-full max-w-[95%] sm:max-w-[500px] lg:max-w-[700px]">
        <div className="flex-1 w-full">
          <input
            type="text"
            value={input}
            readOnly
            placeholder="0"
            className="w-full text-right text-3xl font-mono border border-gray-300 rounded-lg p-3 bg-gray-100 mb-2 text-black"
          />
          {result !== '' && (
            <div className="text-right text-2xl text-blue-700 font-bold mb-3">
              = {result}
            </div>
          )}
        </div>

        <div className="grid grid-cols-4 gap-2 lg:w-[60%]">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === '=') calculate()
                else if (btn === '%') handlePercentage()
                else if (btn === 'C') clear()
                else if (btn === '×') handleBackspace()
                else handleClick(btn)
              }}
              className={`p-3 text-xl font-semibold rounded-lg transition duration-200 ${
                ['C', '×'].includes(btn)
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : btn === '='
                  ? 'bg-green-500 hover:bg-green-600 text-white'
                  : 'bg-gray-200 hover:bg-blue-600 hover:text-white text-black'
              }`}
            >
              {btn === '×' ? '←' : btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}