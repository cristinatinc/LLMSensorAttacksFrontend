import ProcessInputs from '@/components/ProcessInputs'
import AIChatbox from '@/components/AIChatbox'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js with Flask and AI</h1>
      <div className="w-full max-w-2xl space-y-8">
        <ProcessInputs />
        <AIChatbox />
      </div>
    </main>
  )
}