'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Maximize2, Minimize2, MessageSquare, Send } from 'lucide-react'

export default function AIChatbox() {
  const [messages, setMessages] = useState<{ role: string, content: string }[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  useEffect(() => {
    if (!isDialogOpen) {
      inputRef.current?.focus()
    }
  }, [isDialogOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    setMessages(prevMessages => [...prevMessages, { role: 'user', content: input }])
    setInput('')

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
      inputRef.current?.focus()
    }
  }

  const ChatContent = () => (
    <>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
          <MessageSquare className="w-6 h-6 mr-2" />
          AI Chatbox
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={() => setIsDialogOpen(true)}>
          <Maximize2 className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="h-[300px] overflow-y-auto space-y-4 p-4">
        {messages.map((m, index) => (
          <div key={index} className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-blue-100 dark:bg-blue-900 ml-auto' : 'bg-gray-100 dark:bg-gray-700 mr-auto'} max-w-[80%]`}>
            <p className={`text-sm ${m.role === 'user' ? 'text-blue-800 dark:text-blue-200' : 'text-gray-800 dark:text-gray-200'}`}>
              {m.content}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </CardFooter>
    </>
  )

  return (
    <>
      <Card className="w-full">
        <ChatContent />
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[800px] h-[600px] flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between">
        <DialogTitle className="flex items-center">
            <MessageSquare className="w-6 h-6 mr-2" />
                AI Chatbox
        </DialogTitle>

        </DialogHeader>

          <div className="flex-grow overflow-y-auto space-y-4 p-4">
            {messages.map((m, index) => (
              <div key={index} className={`p-3 rounded-lg ${m.role === 'user' ? 'bg-blue-100 dark:bg-blue-900 ml-auto' : 'bg-gray-100 dark:bg-gray-700 mr-auto'} max-w-[80%]`}>
                <p className={`text-sm ${m.role === 'user' ? 'text-blue-800 dark:text-blue-200' : 'text-gray-800 dark:text-gray-200'}`}>
                  {m.content}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="flex w-full space-x-2 p-4">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-grow"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : <Send className="h-4 w-4" />}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}