import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-black-500 to-teal-400 text-white font-sans">
      <header className="mb-8">
        <h1 className="text-5xl font-bold tracking-tight text-center text-shadow-md">{t('title')}</h1>
      </header>
      <main className="bg-white bg-opacity-20 rounded-xl shadow-lg p-8 w-full max-w-md">
        <section className="mb-6">
          <p className="text-lg text-center text-white opacity-80">{t('welcomeMessage')}</p>
        </section>
        <nav>
          <Link
            href="/about"
            className="inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75"
          >
            {t('about')} 
          </Link>
        </nav>
      </main>
      <footer className="mt-8 text-center text-gray-300 text-sm">
        <p>&copy; Meu Projeto Next.js com i18n</p>
      </footer>
    </div>
  );
}