'use client'

import { useState } from 'react'

export default function ProcessInputs() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input1, input2 }),
    })
    const data = await response.json()
    setResult(data.result)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Process Inputs</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="input1" className="block text-sm font-medium text-gray-700">
            Input 1
          </label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="input2" className="block text-sm font-medium text-gray-700">
            Input 2
          </label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Process
        </button>
      </form>
      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Result:</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  )
}