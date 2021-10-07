import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600ox] 2xl:h-[700ox]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
      />
    </div>
  );
};

export default Banner;
