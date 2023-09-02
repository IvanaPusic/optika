import hamburger from '../assets/hamburger.svg';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import { links, socials } from '../data';

const Navigation = ({ openMenu }) => {
  return (
    <header className='w-full h-[4.375rem] lg:h-[5.625rem] '>
      <nav className='navigation'>
        {/* mobile */}
        <div className='flex justify-center gap-[1.12rem] lg:hidden'>
          <button onClick={openMenu}>
            <img src={hamburger} alt='hamburger' />
          </button>
          <div>
            <img src={logo} alt='logo' />
          </div>
        </div>
        <button className='lg:hidden'>
          <img src={search} alt='' />
        </button>

        {/* desktop */}
        <div className='max-lg:hidden flex justify-between'>
          <div className='bg-yellow h-full w-[12.9375rem] flex justify-center max-lg:hidden'>
            <img
              src={logo}
              alt='logo'
              className='pt-[1.75rem] pl-[1.19rem] pr-[1.5rem] pb-[1.31rem] max-lg:hidden'
            />
          </div>
          <ul className='flex h-full ml-[2.87rem] pt-[2.38rem] pb-[2.25rem] align-middle gap-[3.37rem]  max-lg:hidden'>
            {links.map((link) => {
              return (
                <li
                  key={link.name}
                  className=' pb-[2.06rem] hover:border-b-2 hover:border-b-yellow  '
                >
                  {/* <Link to={link.path}>{link.name}</Link> */}
                  <a className='link' href={link.path}>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='max-lg:hidden flex justify-evenly '>
          <div className='flex justify-center gap-[1.06rem] pr-[2.25rem] md:gap-3'>
            {socials.map((item) => (
              <button key={item.name}>
                <img src={item.name} alt='socials' />
              </button>
            ))}
          </div>
          <button className='h-full border-l-[#e1e1e1] border-l-2 pl-[2rem] pt-[2rem] pb-[2rem] pr-[1.94rem]'>
            <img src={search} alt='search' />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
