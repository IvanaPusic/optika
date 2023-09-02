import { GrClose } from 'react-icons/gr';
import { links } from '../data';

const MobileNavigation = ({ closeMenu }) => {
  return (
    <div className='fixed top-0 h-screen w-screen bg-white lg:hidden flex justify-around align-middle'>
      <button
        onClick={closeMenu}
        className='btn focus:outline-none fixed top-4 right-4'
      >
        <GrClose />
      </button>

      <ul className='flex flex-col gap-10 justify-center align-middle text-xl'>
        {links.map((link) => {
          return (
            <li
              className='  pb-4 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'
              key={link.name}
            >
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
