// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import { slider2 } from '../data';

const Products = () => {
  return (
    <section className='pb-[5.5rem] lg:pb-[7.75rem]'>
      <div className='mt-[3.84rem] ml-[1.69rem] md:ml-[5.12rem]'>
        <h2 className='text-primary text-small uppercase tracking-[0.25rem] mb-[0.69] md:text-xl'>
          SIGURNO TE ZANIMAJU
        </h2>
        <h3 className='text-secondary text-3xl mb-[1.06rem] md:text-5xl'>
          <span>izdvojeni </span>
          <span className='font-bold'>proizvodi</span>
        </h3>
        <p className='products-text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum.
        </p>
      </div>

      <div className='mt-[1.31rem] ml-[1.69rem] md:ml-[5.12rem] md:mt-[2.56rem]'>
        <Swiper>
          {slider2.map((slide) => {
            const { id, img, heading, text } = slide;
            return (
              <SwiperSlide key={id} className='products-slide'>
                <div className='products-image-wrapper'>
                  <img src={img} alt='' className='block' />
                </div>
                <div className='ml-[2.19rem]'>
                  <h4 className='text-primary tracking-[0.1125rem] uppercase text-2xs'>
                    {heading}
                  </h4>
                  <p className='w-[12.625rem] mt-[0.62rem] text-large leading-[1.4625rem] text-dark'>
                    {text}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <button className=' products-btn'>
        pogledaj <span className='font-bold'>katalog proizvoda</span>
      </button>
    </section>
  );
};

export default Products;
