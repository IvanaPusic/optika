// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { slider1 } from '../data';
const Slider = () => {
  return (
    <section className='slider'>
      <div className='w-full h-full absolute top-[15.94rem]'>
        <Swiper spaceBetween={10} slidesPerView={1} className='flex'>
          <span slot='container-start' className='mt-[7.5rem]'>
            <p className='text-primary uppercase text-xl font-bold tracking-[0.3125rem] -rotate-90'>
              Akcija!
            </p>
          </span>
          {slider1.map((slide) => {
            const { id, img, text } = slide;
            return (
              <SwiperSlide
                key={id}
                className='min-h-[13.25rem] max-w-[20.1875rem]'
              >
                <div>
                  <img src={img} alt='' />
                </div>
                <p className='w-[18.6875rem] text-dark text-xl mt-[0.88rem]'>
                  {text}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
