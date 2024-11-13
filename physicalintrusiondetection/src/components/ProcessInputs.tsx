'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function ProcessInputs() {
  const [formData, setFormData] = useState({ input1: '', input2: '' })
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch('/api/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      setResult(data.result)
    } catch (error) {
      console.error('Error processing inputs:', error)
      setResult('An error occurred while processing your inputs.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">Process Inputs</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">Enter two inputs to process:</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input1" className="text-gray-700 dark:text-gray-200">Input 1</Label>
            <Input
              id="input1"
              name="input1"
              value={formData.input1}
              onChange={handleFormChange}
              placeholder="Enter first input"
              required
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input2" className="text-gray-700 dark:text-gray-200">Input 2</Label>
            <Input
              id="input2"
              name="input2"
              value={formData.input2}
              onChange={handleFormChange}
              placeholder="Enter second input"
              required
              className="w-full"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-4">
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? 'Processing...' : 'Process'}
          </Button>
          {result && (
            <div className="w-full mt-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Result:</h3>
              <p className="mt-2 p-3 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-100">{result}</p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}