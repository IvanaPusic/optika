import {
  Footer,
  Hero,
  MobileApp,
  News,
  Newsletter,
  Products,
  Slider,
  VideoEducation,
  VideoSection,
} from '../components';

const Home = () => {
  return (
    <section className='relative overflow-hidden '>
      <Hero />
      <Slider />
      <Products />
      <VideoEducation />
      <News />
      <div className='lg:pl-[5.12rem] lg:pr-[5.19rem]'>
        <MobileApp />
      </div>
      <VideoSection />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Home;
