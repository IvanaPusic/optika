// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { slider1 } from '../data';
const Slider = () => {
  return (
    <section className='h-[16.0625rem] bg-white md:hidden'>
      <div className='w-full h-full fixed top-[20rem]'>
        <Swiper slidesPerView={1} className='flex gap-[0.06rem] '>
          <span slot='container-start' className='mt-[8rem]'>
            <p className='text-primary uppercase text-xl font-bold tracking-[0.3125rem] -rotate-90'>
              Akcija!
            </p>
          </span>
          {slider1.map((slide) => {
            const { id, img, text } = slide;
            return (
              <SwiperSlide key={id}>
                <div className='h-[13.25rem] w-[20.1875rem]'>
                  <img src={img} alt='' />
                </div>
                <p className='w-[18.6875rem] text-dark text-xl'>{text}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
