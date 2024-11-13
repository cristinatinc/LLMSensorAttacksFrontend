import ProcessInputs from '@/components/ProcessInputs'
import AIChatbox from '@/components/AIChatbox'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-24">
      <h1 className="text-4xl font-bold mb-8 text-center">AI-Powered Input Processing and Chat</h1>
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <ProcessInputs />
        </div>
        <div className="w-full lg:w-1/2">
          <AIChatbox />
        </div>
      </div>
    </main>
  )
}