import mobilePhone from '../assets/mobile.png';

const MobileApp = () => {
  return (
    <section className='mobile-app-section'>
      <div className='mobile-app-wrapper'>
        <p className='text-gray uppercase tracking-[0.25rem] text-xs md:text-xl pb-[1.25rem]'>
          aplikacija
        </p>
        <h3 className='mobile-app-heading'>
          Skini i ti
          <span className='font-bold ml-1'>Livision mobilnu aplikaciju</span> i
          uštedi više!
        </h3>
        <button className='desktop-btn'>
          saznaj <span className='font-bold'>više</span>
        </button>
      </div>
      <div className='flex pt-[4.12rem] justify-center align-middle lg:pt-[4.12rem] xl:ml-[5.25rem] lg:pr-[10rem]'>
        <img src={mobilePhone} alt='mobile' className='mobile-app-img' />
      </div>
      <button className='mobile-app-btn'>
        saznaj <span className='font-bold'>više</span>
      </button>
    </section>
  );
};

export default MobileApp;
