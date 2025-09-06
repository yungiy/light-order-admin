import { SIDEBAR_PATH } from '../../constants';
import { Link } from 'react-router';

export default function SideBar({ toggleSidebar }) {
  return (
    <div className='bg-gray-800 text-white w-52 min-h-screen p-4'>
      <div className='flex justify-between items-center mb-4'>
        <div className='text-2xl text-amber-400 font-extrabold font-serif'>Light Order</div>
        <button onClick={toggleSidebar} className='md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <nav className='text-xl font-extrabold px-2 rounded'>
        <ul className='flex flex-col gap-5'>
          {SIDEBAR_PATH.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className='block transition-all duration-300 hover:scale-115'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
