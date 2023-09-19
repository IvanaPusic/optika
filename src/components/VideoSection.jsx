import { videoSlider } from '../data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const VideoSection = () => {
  return (
    <section className='relative video-section md:mt-[12.375rem] '>
      <div className='text-center flex flex-col justify-around align-middle'>
        <h3 className=' mt-[7.31rem] text-small text-primary tracking-[0.25rem] uppercase'>
          video sekcija
        </h3>
        <h2 className='flex justify-center align-middle gap-2 text-3xl font-thin text-secondary'>
          poznati
          <span className='font-bold'>o nama</span>
        </h2>
        <p className='min-w-[16.875rem]  text-base text-center text-secondary lg:pt-[1.31rem]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum.
        </p>
      </div>
      <div className='pl-[1.88rem] pt-[1.69rem] lg:pt-[3.13rem]'>
        <Swiper>
          {videoSlider.map((video) => (
            <SwiperSlide
              key={video.id}
              className='w-[21.25rem] max-w-[32.3125rem] mr-[0.81rem] lg:mr-[1.62rem]'
            >
              <img src={video.img} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoSection;
