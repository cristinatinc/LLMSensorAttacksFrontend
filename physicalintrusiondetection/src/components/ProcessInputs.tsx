'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function ProcessInputs() {
  const [formData, setFormData] = useState({ input1: '', input2: '' })
  const [result, setResult] = useState('')

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('/api/process', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    setResult(data.result)
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Process Inputs</CardTitle>
        <CardDescription>Enter two inputs to process:</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="input1">Input 1</Label>
            <Input
              id="input1"
              name="input1"
              value={formData.input1}
              onChange={handleFormChange}
              placeholder="Enter first input"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input2">Input 2</Label>
            <Input
              id="input2"
              name="input2"
              value={formData.input2}
              onChange={handleFormChange}
              placeholder="Enter second input"
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-4">
          <Button type="submit">Process</Button>
          {result && (
            <div className="w-full">
              <h3 className="text-lg font-semibold">Result:</h3>
              <p className="mt-2 p-2 bg-gray-100 rounded">{result}</p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  )
}