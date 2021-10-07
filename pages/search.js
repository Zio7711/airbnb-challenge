import Header from '../components/Header';
import Footer from '../components/Footer';

const Search = () => {
  return (
    <div className='h-screen'>
      <Header />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ stays for </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in Mars</h1>

          <div className='hidden md:inline-flex mb-5 lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap'>
            <button className='button'>Cancellation Flexibility</button>
            <button className='button'>Type of Places</button>
            <button className='button'>Price</button>
            <button className='button'>Rooms ond Beds</button>
            <button className='button'>More filters</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
