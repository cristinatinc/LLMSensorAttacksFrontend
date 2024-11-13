'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIChatbox() {
  const [messages, setMessages] = useState<{ role: string, content: string }[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    setMessages(prevMessages => [...prevMessages, { role: 'user', content: input }])

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input }),
      })
      
      if (response.ok) {
        const data = await response.json()
        setMessages(prevMessages => [...prevMessages, { role: 'ai', content: data.response }])
      } else {
        console.error('Error from server:', response.statusText)
        setMessages(prevMessages => [
          ...prevMessages,
          { role: 'ai', content: "Sorry, there was an error processing your request." }
        ])
      }
    } catch (error) {
      console.error('Error:', error)
      setMessages(prevMessages => [
        ...prevMessages,
        { role: 'ai', content: "Sorry, there was an error connecting to the server." }
      ])
    } finally {
      setIsLoading(false)
      setInput('')
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>AI Chatbox</CardTitle>
      </CardHeader>
      <CardContent className="h-[400px] overflow-y-auto space-y-4">
        {messages.map((m, index) => (
          <div key={index} className={`p-2 rounded-lg ${m.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
            <strong>{m.role === 'user' ? 'You: ' : 'AI: '}</strong>
            {m.content}
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Your question..."
            className="flex-grow"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Asking...' : 'Ask AI'}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}