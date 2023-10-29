import Link from 'next/link';
import { useRouter } from 'next/router';

const headerRoutes = [
  // {
  //   id: 1,
  //   title: 'Home',
  //   link: '/home',
  // },
  {
    id: 2,
    title: 'Connection',
    link: '/profile',
  },
];

function Header() {
  const router = useRouter();

  return (
    <div className='bg-white h-[4.5rem] flex items-center justify-between sticky top-0 z-50 p-8 shadow-md'>
      <div
        className={`flex w-full justify-start flex-1 items-center h-[3.75rem] overflow-hidden`}
      >
        <Link className='text-primary text-center text-lg' href={'/home'}>
          Lens Protocol
        </Link>
      </div>
      {headerRoutes?.map((item) => (
        <Link key={item.id} href={item.link}>
          <p
            className={`${
              router?.asPath?.includes(item.link)
                ? 'text-primary font-medium'
                : 'text-gray-secondary font-normal'
            } text-center whitespace-nowrap text-lg`}
          >
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Header;
