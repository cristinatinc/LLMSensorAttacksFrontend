import Header from '@/components/Header';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      <Header />
      <main className="container mx-auto px-6 py-8 sm:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-black dark:text-white leading-tight mb-8">
          About Us
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Physical Intrusion Detection System is an advanced security solution designed to protect your premises from unauthorized access.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our system uses cutting-edge AI technology to analyze inputs and provide real-time threat assessments, ensuring the safety of your property and assets.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            With a team of experienced security experts and software engineers, we are committed to delivering the most reliable and efficient intrusion detection system on the market.
          </p>
        </div>
      </main>
    </div>
  );
}