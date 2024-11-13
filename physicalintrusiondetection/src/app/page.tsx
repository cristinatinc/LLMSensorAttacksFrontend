import Header from '@/components/Header';  // Import the Header component
import ProcessInputs from '@/components/ProcessInputs';
import AIChatbox from '@/components/AIChatbox';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      {/* Integrate the Header Component */}
      <Header />

      <div className="container mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* Updated Title */}
        <h1 className="text-4xl sm:text-5xl font-semibold text-center text-black dark:text-white leading-tight mb-12">
          Physical Intrusion Detection System
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 transition-colors duration-200">
            <ProcessInputs />
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 transition-colors duration-200">
            <AIChatbox />
          </div>
        </div>
      </div>
    </main>
  );
}
