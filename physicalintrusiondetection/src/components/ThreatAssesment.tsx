'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Shield } from 'lucide-react'

export default function ThreatAssessment() {
  const [assessment, setAssessment] = useState<string | null>(null)

  const handleAssessment = () => {
    // Placeholder for future AI integration
    setAssessment("No immediate threat detected. Continue to monitor the situation.")
  }

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center">
          <Shield className="w-6 h-6 mr-2" />
          Threat Assessment
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center flex-grow">
        <Button 
          onClick={handleAssessment}
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
        >
          <AlertCircle className="w-6 h-6" />
          <span>Am I under attack?</span>
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        {assessment && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-md w-full">
            <p className="text-center text-gray-800 dark:text-gray-200">{assessment}</p>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}