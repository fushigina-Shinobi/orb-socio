import { useEffect, useState } from 'react';
import Header from '../Header';
import { useRouter } from 'next/router';

export default function Layout({ children, hideLayout }) {
  const [showMobilePrompt, setShowMobilePrompt] = useState(false);
  const [showDesktopPrompt, setShowDesktopPrompt] = useState(false);

  const route = useRouter();
  const { pathname } = route;

  useEffect(() => {
    const handleResize = () => {
      if (pathname === '/home') {
        if (window.innerWidth < 640) {
          setShowMobilePrompt(true);
          setShowDesktopPrompt(false);
        } else {
          setShowMobilePrompt(false);
          setShowDesktopPrompt(true);
        }
      } else {
        setShowMobilePrompt(false);
        setShowDesktopPrompt(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname]);

  if (hideLayout) {
    return children;
  }

  return (
    <div className='min-h-screen flex flex-col w-full'>
      {showMobilePrompt && (
        <div
          id='mobilePrompt'
          className='flex justify-between items-center border p-4 w-full'
        >
          <div className='flex flex-auto'>
            <div className='flex w-full items-center gap-x-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 124 80'
                fill='none'
                className='text-paleSunflower w-[4rem]'
              >
                <path
                  fill='#FFEBB8'
                  stroke='#FFEBB8'
                  stroke-miterlimit='10'
                  stroke-width='4.641'
                  d='M84.228 25.62a.732.732 0 0 1-1.263-.527c0-.622 0-1.306-.03-1.953-.735-26.853-40.93-26.853-41.665 0a74.725 74.725 0 0 0-.026 1.953c0 .657-.798.99-1.263.527-.456-.455-.93-.919-1.394-1.361C19.19 5.794-9.213 34.434 9.123 53.919c.445.472.897.94 1.356 1.405C32.602 77.597 62.097 77.6 62.103 77.6c.005 0 29.504-.002 51.628-22.276.462-.463.914-.93 1.356-1.404 18.336-19.508-10.085-48.126-29.464-29.661a42.22 42.22 0 0 0-1.395 1.361Z'
                ></path>
                <path
                  fill='#383F3A'
                  fill-rule='evenodd'
                  d='M79.191 45.803c-.622 0-.838.905-.44 1.384a4.896 4.896 0 0 1 1.125 3.133c0 2.704-2.177 4.896-4.863 4.896-2.686 0-4.863-2.192-4.863-4.896 0-.145-.187-.217-.272-.1-.767 1.061-1.285 2.252-1.497 3.502-.12.704-.689 1.287-1.403 1.287h-.394c-.932 0-1.701-.76-1.564-1.682.944-6.318 7.127-10.9 14.171-10.9 7.043 0 13.227 4.582 14.17 10.9.138.921-.63 1.682-1.563 1.682-.932 0-1.67-.764-1.873-1.674-.922-4.141-5.195-7.532-10.734-7.532ZM36.009 50.32c0-.19-.246-.293-.361-.141-.82 1.077-1.38 2.296-1.616 3.582-.14.76-.753 1.39-1.525 1.39h-.29c-.931 0-1.7-.76-1.563-1.682.943-6.32 7.127-10.899 14.17-10.899 7.044 0 13.229 4.578 14.171 10.9.138.92-.631 1.682-1.563 1.682-.932 0-1.67-.765-1.873-1.675-.921-4.143-5.195-7.531-10.734-7.531-.504 0-.688.711-.351 1.085a4.897 4.897 0 0 1 1.26 3.289c0 2.704-2.177 4.896-4.863 4.896-2.685 0-4.862-2.192-4.862-4.896Zm33.998 11.274c-.818-.447-1.836-.127-2.495.533-1.27 1.27-3.195 2.14-5.423 2.14-2.233 0-4.156-.86-5.423-2.132-.658-.66-1.675-.985-2.494-.541-.82.444-1.134 1.48-.546 2.204 1.922 2.37 5.037 3.843 8.463 3.843 3.428 0 6.537-1.49 8.457-3.84.589-.723.279-1.76-.54-2.207Z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <div className='flex flex-col'>
                <p className='text-sm text-primary font-medium'>Orb</p>
                <p className='text-xs text-secondary'>Open in the Orb app</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-2 items-center'>
            <a
              href='https://orb.ac'
              target='_blank'
              className='bg-primary text-xs text-white hover:opacity-80 px-4 h-fit py-2 items-center flex justify-center rounded'
            >
              Open
            </a>
            <p
              onClick={() => setShowMobilePrompt(false)}
              className='text-tertiary text-xs'
            >
              Dismiss
            </p>
          </div>
        </div>
      )}

      {showDesktopPrompt && (
        <div className='fixed right-4 bottom-4 w-80 bg-white border border-gray-300 rounded-lg shadow-md p-4 z-10'>
          <span
            className='float-right cursor-pointer font-heebo text-secondary'
            onClick={() => setShowDesktopPrompt(false)}
          >
            x
          </span>
          <p className='text-2xl font-medium bg-gradient-to-r from-purple-600 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-shine'>
            Download our app for the best experience:
          </p>
          <p className='text-gray-500'>Everyday app for web3 social.</p>
          <div className='flex justify-between items-center'>
            <a
              href='https://apps.apple.com/us/app/orb-everyday-web3-social-app/id1638461963'
              target='_blank'
              className='block mt-2 text-blue-600 hover:underline'
            >
              <img
                src='/assets/images/applestore.webp'
                alt='apple store'
                width={150}
                height={150}
              />
            </a>
            <a
              href='https://play.google.com/store/apps/details?id=app.orb.flutter'
              target='_blank'
              className='block mt-2 text-blue-600 hover:underline'
            >
              <img
                src='/assets/images/playstore.webp'
                alt='play store'
                width={150}
                height={150}
              />
            </a>
          </div>
        </div>
      )}
      <Header />
      <div className='flex flex-auto'>{children}</div>
    </div>
  );
}
