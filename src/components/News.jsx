import opticianMeasuring from '../assets/optician-measuring.png';
import optician from '../assets/optician.png';
import sightCheck from '../assets/sight-check.png';

const News = () => {
  return (
    <section className='news-section'>
      {/* news */}
      <div>
        <p className='text-primary uppercase text-small tracking-[0.25rem] pb-[0.69rem] font-normal'>
          najnovije
        </p>
        <h4 className='text-secondary text-3xl pb-[1.06rem]'>
          livison <span className='font-bold'>vijesti</span>
        </h4>
        <p className=' max-w-[32.4375rem] text-base pb-[1.31rem] text-dark leading-[1.3125rem]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className=' max-w-[32.4375rem] pb-[1.31rem] text-base text-dark leading-[1.3125rem]'>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
        <button className='hidden md:block md:w-[17.375rem] md:h-[5.625rem] text-brown text-xl bg-yellow'>
          pogledaj <span className='font-bold'>sve novosti</span>
        </button>
      </div>
      {/* sight check */}
      <div>
        <article>
          <div className='w-[24.5625rem] lg:max-h-[35.4375rem] lg:max-w-[53.1875rem]'>
            <img
              src={optician}
              alt='optician'
              className='w-full h-full block'
            />
          </div>
          <div className='pt-[1.3125rem] pb-[1.375rem]'>
            <p className='text-xs text-primary tracking-[0.125rem] pb-[0.56rem]'>
              12. svibnja 2021 / 23:55
            </p>
            <p className='text-dark min-w-[21rem] max-w-[38.8125rem] leading-[1.9375rem] text-2xl'>
              Dolce&Gabbana - talijanski fashion mogul u Livisionu od svibnja
              2021
            </p>
            <p className='hidden lg:pt-[1.19rem] lg:block lg:max-w-[38.8125rem] lg:leading-[1.75rem] text-large font-light'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500
            </p>
          </div>
        </article>
        <div className='md:flex md:gap-[1.6875rem] md:justify-center md:align-middle'>
          <article className='pt-[1.37rem] md:mt-[3.07rem] flex md:block gap-[1.31rem] '>
            <div>
              <img
                src={opticianMeasuring}
                alt='optician measuring sight'
                className='md:max-w-[18.5625] md:max-h-[10.5rem]'
              />
            </div>
            <div className='md:pt-[1.74rem] '>
              <p className='text-primary text-xs lg:hidden'>
                12. svibnja 2021.
              </p>
              <p className='hidden lg:block lg:text-primary lg:text-xs'>
                12. svibnja 2021 / 23:55
              </p>
              <p className='text-dark text-2xl leading-[1.625rem]'>
                Lorem ipsum dolores mit deum
              </p>
            </div>
          </article>

          <article className='hidden  md:flex md:flex-col md:mt-[7.02rem]  sticky'>
            <div className=''>
              <img
                src={sightCheck}
                alt='sight check'
                className='w-[18.5625] h-[10.5rem]'
              />
            </div>
            <div className=''>
              <p className='text-xs text-primary tracking-[0.125rem]'>
                12. svibnja 2021 / 23:55
              </p>
              <p className='text-xl text-dark leading-[1.625rem] max-w-[18.5625rem]'>
                Lorem ipsum dolores mit deum is dummy text in graphic{' '}
              </p>
            </div>
          </article>
        </div>

        <article className='flex gap-[1.31rem] pt-[1.37rem] md:hidden'>
          <div>
            <img src={opticianMeasuring} alt='optician measuring sight' />
          </div>
          <div>
            <p className='text-primary text-xs'>12. svibnja 2021.</p>

            <p className='text-dark text-2xl leading-[1.625rem]'>
              Lorem ipsum dolores mit deum
            </p>
          </div>
        </article>
        <button className='w-[20.8125rem] h-[5.625rem] text-brown text-xl mt-[1.56rem]  bg-dark-yellow md:hidden'>
          pogledaj <span className='font-bold'>sve novosti</span>
        </button>
      </div>
    </section>
  );
};

export default News;
