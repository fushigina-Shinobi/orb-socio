import Link from 'next/link';
import HeroAnimation from '../Common/HeroAnimation';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const imageURL =
    process.env.NEXT_PUBLIC_BASE_URL +
    '/api/og/main?' +
    'title=' +
    encodeURIComponent('Lens Protocol') +
    '&description=' +
    encodeURIComponent('Web-3 Social Layer Solution');

  const canonicalURL = `${process.env.NEXT_PUBLIC_BASE_URL}/home`;

  const [loading, setLoading] = useState(false);
  return (
    <HeroAnimation>
      <Head>
        <meta property='og:image' content={imageURL} />
        <meta property='og:image:secure_url' content={imageURL} />
        <meta property='og:image:secure' content={imageURL} />
        <meta property='og:image:width' content='250' />
        <meta property='og:image:height' content='250' />
        <meta property='og:image' content={imageURL} />
        <meta property='og:type' content='product' />
        <meta name='twitter:image' content={imageURL} />
        <meta name='twitter:card' content={imageURL} />
        <link rel='canonical' href={canonicalURL} />
      </Head>
      <div className='flex flex-auto justify-center items-center w-full'>
        <section className='px-2 md:px-0'>
          <div className='container items-center max-w-6xl px-8 mx-auto xl:px-5'>
            <div className='flex flex-wrap items-center sm:-mx-3'>
              <div className='w-full md:w-1/2 md:px-3'>
                <div className='w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0'>
                  <h1 className=' font-extrabold tracking-tight  text-primary'>
                    <span className='block xl:inline text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl'>
                      LENS PROTOCOL
                    </span>
                    <br />
                    <span className='block text-secondary xl:inline text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl'>
                      The Social Layer for Web3
                    </span>
                  </h1>
                  <p className='mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl'>
                    "Empowering individuals while fostering transparency through
                    blockchain technology."
                  </p>
                  <div className='relative flex flex-col sm:flex-row sm:space-x-4'>
                    {loading ? (
                      <div className='bg-opacity-40 cursor-not-allowed w-full sm:w-44 h-[3.25rem] flex justify-center items-center px-6 py-3 mb-3 text-lg text-white bg-primary rounded-md sm:mb-0'>
                        <div
                          className='w-5 h-5 mr-4 rounded-full animate-spin
                    border-4 border-solid border-t-transparent'
                        ></div>
                      </div>
                    ) : (
                      <Link
                        href={'/profile'}
                        onClick={() => setLoading(true)}
                        className='flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-primary opacity-90 rounded-md sm:mb-0 hover:opacity-80 sm:w-auto'
                      >
                        Check Profile
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='w-5 h-5 ml-1'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        >
                          <line x1='5' y1='12' x2='19' y2='12'></line>
                          <polyline points='12 5 19 12 12 19'></polyline>
                        </svg>
                      </Link>
                    )}

                    <a className='flex cursor-not-allowed items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600'>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 md:px-3'>
                <div className='w-full h-auto overflow-hidden rounded-md'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 124 80'
                    fill='none'
                    className='text-paleSunflower xl:w-[32rem] md:w-full'
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </HeroAnimation>
  );
}
