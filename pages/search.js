import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

const Search = ({ searchResults }) => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className='h-screen'>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className='flex  max-w-7xl mx-auto'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ stays -{range} - for {noOfGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>

          <div className='hidden md:inline-flex mb-5 lg:inline-flex space-x-3 text-gray-800 whitespace-nowrap'>
            <button className='button'>Cancellation Flexibility</button>
            <button className='button'>Type of Places</button>
            <button className='button'>Price</button>
            <button className='button'>Rooms ond Beds</button>
            <button className='button'>More filters</button>
          </div>

          <div className='flex flex-col'>
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  price={price}
                  star={star}
                  description={description}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className='hidden xl:inline-flex'>
          <Map />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async () => {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
};
