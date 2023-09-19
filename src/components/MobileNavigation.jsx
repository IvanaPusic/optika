import { GrClose } from 'react-icons/gr';
import { links } from '../data';

const MobileNavigation = ({ closeMenu }) => {
  return (
    <div className='fixed top-0 h-screen w-screen bg-white lg:hidden flex justify-around align-middle z-10'>
      <button
        onClick={closeMenu}
        className='btn focus:outline-none fixed top-4 right-4'
      >
        <GrClose />
      </button>

      <ul className='flex flex-col gap-10 justify-center align-middle text-xl'>
        {links.map((link) => {
          return (
            <li className='mobile-nav-link' key={link.name}>
              <a className='link' href={link.path}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNavigation;
