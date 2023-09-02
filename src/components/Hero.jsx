const Hero = () => {
  return (
    <section className='hero'>
      <div className='md:hidden'>
        <p className='uppercase text-small tracking-[0.25rem] font-normal text-secondary'>
          dobrodošli
        </p>
        <h1 className='flex flex-col text-5xl text-dark-blue leading-[2.625rem] mt-[0.62rem] '>
          <span className='font-normal'>tu smo</span>
          <span className='font-bold'>za vas.</span>
        </h1>
      </div>

      <div className='hidden md:block mt-[2rem] lg:mt-[20.62rem] lg:ml-[5.12rem]'>
        <p className='text-white font-light lg:font-normal uppercase text-base lg:text-xl leading-normal tracking-[0.3125rem] font-normal'>
          božićna akcija
        </p>
        <h1 className='text-3xl lg:text-6xl flex flex-col text-white lg:leading-[5.625rem]'>
          <span className='font-normal'>ne propustite</span>
          <span className='font-bold'>akciju za božić</span>
        </h1>
        <p className='text-white w-[25.5rem] mt-3 lg:mt-[2.25rem] lg:text-large font-normal'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum.
        </p>
      </div>
    </section>
  );
};

export default Hero;
