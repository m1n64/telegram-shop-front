import type { NextPage } from 'next';
import Head from 'next/head';

import useTelegramInitData from '../hooks/useTelegramInitData';

const Home: NextPage = () => {
  const telegramInitData = useTelegramInitData();

  console.log(telegramInitData);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-telegram-white">
      <Head>
        <title>Next.js + Tailwind CSS + Telegram&apos;s Web App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <span className="text-2xl font-bold text-telegram-black">
          This is a starter template using Next.js and Tailwind CSS for Telegram&apos;s Web Apps.
        </span>
      </main>

      <div className="text-white">{JSON.stringify(telegramInitData, null, 2)}</div>
    </div>
  );
};

export default Home;
