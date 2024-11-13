import Header from '@/components/Header';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      <Header />
      <main className="container mx-auto px-6 py-8 sm:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-black dark:text-white leading-tight mb-8">
          Contact Information
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors duration-200">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Supervisor:
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
             <strong>Yves Staudenmaier : </strong><a href="mailto:yves.staudenmaier@students.uni-mannheim.de"> yves.staudenmaier@students.uni-mannheim.de </a>
          </p>
          <br />
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Students:
            </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Ignatio Hidayat : </strong><a href="mailto:ignatio.hidayat@students.uni-mannheim.de"> ignatio.hidayat@students.uni-mannheim.de </a>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Shama Holla : </strong><a href="mailto:shama.holla@students.uni-mannheim.de"> shama.holla@students.uni-mannheim.de </a>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Robert-Ernö Eminovici : </strong><a href="mailto:robert.eminovici@stud.ubbcluj.ro"> robert.eminovici@stud.ubbcluj.ro </a>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Oana-Cristina Tincu : </strong><a href="mailto:oana.tincu@stud.ubbcluj.ro"> oana.tincu@stud.ubbcluj.ro </a>
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Julia Markhovski : </strong><a href="mailto:julia.markhovski@students.uni-mannheim.de"> julia.markhovski@students.uni-mannheim.de </a>          </p>
        </div>
      </main>
    </div>
  );
}