import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import logo from '../assets/logo-gray.svg';
import { catalog, catalog2, footerLinks, footerLinks2 } from '../data';

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className='flex flex-col lg:hidden justify-center align-middle pt-[2.81rem]'>
        <div className='flex justify-center align-middle'>
          <img src={logo} alt='logo' />
        </div>
        <div className=' text-center pt-[2.25rem]'>
          <p className='text-base text-[#979797] leading-[1.5rem]'>
            Optika d.o.o.
          </p>
          <p className='text-base text-[#979797] leading-[1.5rem]'>
            Kninski trg 7,
          </p>
          <p className='text-base text-[#979797] leading-[1.5rem]'>
            10 000 Zagreb
          </p>
        </div>
        <div className='flex justify-center align-middle gap-3 pt-[1.44rem] '>
          <button>
            <img src={facebook} alt='' />
          </button>
          <button>
            <img src={instagram} alt='' />
          </button>
        </div>
      </div>
      <div className='footer-links-wrapper'>
        <ul className='flex flex-col gap-4 pl-[1.56rem]'>
          {footerLinks.map((item) => {
            const { link, href, id } = item;
            return (
              <li key={id}>
                <a href={href} className='text-medium-gray text-base'>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className='flex flex-col gap-4 pr-[1.88rem]'>
          {footerLinks2.map((item) => {
            const { link, href, id } = item;
            return (
              <li key={id}>
                <a href={href} className='text-medium-gray text-base'>
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=' lg:hidden px-[3.94rem] pb-[3.94rem] pt-[2.37rem] flex justify-center align-middle'>
        <p className='text-base text-medium-gray'>
          Pravila privatnosti / Politika kolačića
        </p>
      </div>
      {/* dekstop footer */}
      <div className='hidden lg:flex lg:justify-between pb-[4.06rem]'>
        <div className='hidden pt-[4.87rem] lg:flex pl-[3rem] xl:pl-[5rem]'>
          <div>
            <div className='pb-[2.25rem]'>
              <img src={logo} alt='logo' />
            </div>
            <p className='text-base text-medium-gray leading-[1.5rem]'>
              Optika d.o.o.
            </p>
            <p className='text-base text-medium-gray leading-[1.5rem]'>
              Kninski trg 7
            </p>
            <p className='text-base text-medium-gray leading-[1.5rem]'>
              10 000 Zagreb
            </p>
            <div className='pt-[1.44rem] flex  gap-[1.06rem]'>
              <button>
                <img src={facebook} alt='facebook' />
              </button>
              <button>
                <img src={instagram} alt='instagram' />
              </button>
            </div>
          </div>

          <div className='pl-[4.75rem] '>
            <p className='pb-[2.25rem] text-[#979696] uppercase text-base tracking-[0.1875rem]'>
              katalog
            </p>
            <div className='flex gap-[2rem] xl:gap-[4.75rem]'>
              <ul>
                {catalog.map((item) => {
                  const { id, href, link } = item;
                  return (
                    <li key={id}>
                      <a
                        className='text-base text-[#3a3a3a] leading-[2.1875rem]'
                        href={href}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {catalog2.map((item) => {
                  const { id, href, link } = item;
                  return (
                    <li key={id}>
                      <a
                        className='text-base text-[#3a3a3a] leading-[2.1875rem]'
                        href={href}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className='hidden pt-[4.87rem] lg:block pr-[2rem] xl:pr-[6.81rem]'>
          <p className='pb-[2.25rem] text-[#979696] uppercase text-base tracking-[0.1875rem]'>
            informacije
          </p>
          <div className='flex gap-[2rem] xl:gap-[6.25rem]'>
            <ul>
              {footerLinks.map((item) => {
                const { id, href, link } = item;
                return (
                  <li key={id}>
                    <a
                      className='text-base text-[#3a3a3a] leading-[2.1875rem]'
                      href={href}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul>
              {footerLinks2.map((item) => {
                const { id, href, link } = item;
                return (
                  <li key={id}>
                    <a
                      className='text-base text-[#3a3a3a] leading-[2.1875rem]'
                      href={href}
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-desktop-wrapper'>
        <p className='text-[#3a3a3a]'>
          Javite nam svoje mišljenje,kritike, pohvale i recenzije!
        </p>
        <p className='text-[#3a3a3a]'>
          Pravila privatnosti / Politika kolačića
        </p>
      </div>
    </footer>
  );
};

export default Footer;
