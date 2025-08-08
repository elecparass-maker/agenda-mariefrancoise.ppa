import Head from 'next/head';
import Weather from '../components/Weather';
import Agenda from '../components/Agenda';
import EmergencyContacts from '../components/EmergencyContacts';
import EmergencyServices from '../components/EmergencyServices';

export default function Home() {
  return (
    <>
      <Head>
        <title>MamieBoard</title>
      </Head>
      <main className="bg-blue-100 min-h-screen p-4">
        <h1 className="text-3xl font-bold text-center mb-6">👵 MamieBoard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Weather />
          <Agenda />
          <EmergencyContacts />
          <EmergencyServices />
        </div>
      </main>
    </>
  );
}