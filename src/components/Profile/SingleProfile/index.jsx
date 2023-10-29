import Link from 'next/link';
import Head from 'next/head';
import { options } from '@/components/Posts/SinglePublication';

export default function SingleProfile({ profile, publications, handle }) {
  const coverPicture = profile?.coverPicture?.original?.url;

  const imageURL =
    process.env.NEXT_PUBLIC_BASE_URL +
    '/api/og/profile?' +
    'handle=' +
    encodeURIComponent(handle) +
    '&avatar=' +
    encodeURIComponent(profile?.picture?.original?.url) +
    '&cover=' +
    encodeURIComponent(profile?.coverPicture?.original?.url) +
    '&bio=' +
    encodeURIComponent(profile?.bio);

  const canonicalURL = `${process.env.NEXT_PUBLIC_BASE_URL}/profile/${handle}`;

  return (
    <div className='flex flex-auto flex-col bg-mainBg'>
      <Head>
        <link rel='preconnect' href={canonicalURL} />
        <meta property='og:image' content={imageURL} />
        <meta property='og:image:secure_url' content={imageURL} />
        <meta property='og:image:secure' content={imageURL} />
        <meta property='og:url' content={canonicalURL} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:image' content={imageURL} />
        <meta property='og:type' content='profile' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={imageURL} />
        <meta name='twitter:url' content={canonicalURL} />
        <link rel='canonical' href={canonicalURL} />
      </Head>
      <>
        <div
          className={`h-64 w-full bg-cover bg-center bg-tertiary ${
            !profile?.coverPicture?.original?.url &&
            'flex justify-center items-center text-gray-500'
          }`}
          style={{ backgroundImage: `url(${coverPicture})` }}
        >
          {!profile?.coverPicture?.original?.url && 'Image Not Found'}
        </div>
        <div className='flex lg:flex-row flex-col gap-x-20 container mx-auto max-w-screen-xl grow px-10 pb-2 sm:px-5 pt-6'>
          <div className='max-w-screen-sm lg:w-1/3'>
            <img
              src={
                profile?.picture?.original?.url ??
                '/assets/images/noImageFound.png'
              }
              alt={profile?.handle}
              className='lg:-mt-24 -mt-[4.5rem] h-24 w-24 lg:h-36 lg:w-36 rounded-full border-2'
              onError={(e) => {
                e.target.src = '/assets/images/noImageFound.png';
              }}
            />
            <h1 className='lg:text-3xl my-3 capitalize text-primary text-medium'>
              {profile?.name}
            </h1>
            <h3 className='text-base my-3 text-gray-primary'>
              @{profile?.handle}
            </h3>
            <h3 className='text-xs lg:text-xl mb-4 text-primary'>
              {profile?.bio ?? 'No bio found'}
            </h3>
          </div>
          {/* <div className='border-r'></div> */}
          <div className='flex flex-auto flex-col max-w-xxs sm:max-w-2xl gap-y-4'>
            <div>
              <p className='border-b w-fit text-secondary border-primary text-sm'>
                All Posts
              </p>
            </div>
            <div
              className='w-full'
              // className='bg-white px-6 py-10 rounded-lg shadow-lg'
            >
              {profile && <Publications publications={publications} />}
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </div>
  );
}

function Publications({ publications }) {
  // if (loading) {
  //   return <p className='p-14 flex justify-center items-center'>Loading...</p>;
  // } else if (publications?.length === 0) {
  //   return (
  //     <p className='p-14 flex justify-center items-center border rounded hover:shadow-md'>
  //       No Data Found...
  //     </p>
  //   );
  // }

  return (
    <>
      {publications?.map(
        (pub) =>
          pub?.__typename === 'Post' && (
            <Link key={pub?.id} href={`/posts/${pub?.id}`}>
              <div className='mb-3 px-4 border-gray-200 border shadow-sm hover:shadow-md p-4 rounded-lg bg-white w-full min-h-[10rem]'>
                <p className='break-words min-h-[5rem]'>
                  {pub?.metadata?.content}
                </p>
                {pub.metadata?.media?.[0]?.original &&
                  ['image/jpeg', 'image/png'].includes(
                    pub.metadata?.media?.[0]?.original.mimeType
                  ) && (
                    <img
                      width='400'
                      height='400'
                      alt={profile.handle}
                      className='rounded-xl mt-6 mb-2'
                      src={pub.metadata.media?.[0].original.url}
                    />
                  )}
                <div className='p-3 border-t'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-3'>
                      <button
                        type='button'
                        title='Like post'
                        className='flex items-center justify-center'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                          className='w-5 h-5 fill-current'
                        >
                          <path d='M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z'></path>
                        </svg>
                      </button>
                      <button
                        type='button'
                        title='Add a comment'
                        className='flex items-center justify-center'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                          className='w-5 h-5 fill-current'
                        >
                          <path d='M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z'></path>
                        </svg>
                      </button>
                      <button
                        type='button'
                        title='Share post'
                        className='flex items-center justify-center'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                          className='w-5 h-5 fill-current'
                        >
                          <path d='M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z'></path>
                        </svg>
                      </button>
                    </div>
                    <button
                      type='button'
                      title='Bookmark post'
                      className='flex items-center justify-center'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        className='w-5 h-5 fill-current'
                      >
                        <path d='M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z'></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <p className='text-gray-500  break-words py-2 text-xs'>
                    Posted on{' '}
                    {new Date(pub?.createdAt).toLocaleString(
                      undefined,
                      options
                    )}
                  </p>
                </div>
              </div>
            </Link>
          )
      )}
    </>
  );
}
