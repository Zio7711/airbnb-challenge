import Head from 'next/head';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>Zio Airbnb</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      {/* Banner */}
    </div>
  );
};

export default Home;
