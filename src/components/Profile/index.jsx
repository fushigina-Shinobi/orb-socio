import Link from 'next/link';

export default function Profile({ profiles }) {
  // const { data: profiles, loading } = useExploreProfiles({ limit: 20 });

  return (
    <div className='flex flex-auto justify-center bg-mainBg flex-col items-center'>
      {/* {loading ? (
        <p>Loading...</p>
      ) : ( */}
      <>
        <div className='flex justify-center flex-col items-center py-10'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-primary'>
            Test Profiles
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-center w-9/12'>
            Test data from profile APIs is crucial for evaluating software
            functionality and performance without exposing real personal
            information, helping developers uncover potential issues and ensure
            data privacy compliance.
          </p>
        </div>
        <div className='lg:px-20'>
          <section className='text-gray-700 body-font border-t border-gray-200'>
            <div className='container px-5 pt-10 mx-auto'>
              <div className='flex flex-wrap -m-2'>
                {profiles?.map((profile) => (
                  <Link
                    href={`/profile/${profile?.handle}`}
                    className='p-2 lg:w-1/3 md:w-1/2 w-full'
                    key={profile?.id}
                  >
                    <div className='h-full flex items-center border-gray-200 border shadow-sm hover:shadow-md p-4 rounded-lg'>
                      <img
                        alt={profile?.handle}
                        className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                        src={
                          profile?.picture?.original?.url ??
                          '/assets/images/noImageFound.png'
                        }
                        onError={(e) => {
                          e.target.src = '/assets/images/noImageFound.png';
                        }}
                      />
                      {/*  (
                          <div className='w-16 h-16 object-cover object-center flex-shrink-0 mr-4 inline-flex items-center justify-center rounded-full bg-tertiary text-secondary'>
                            <svg
                              fill='none'
                              stroke='currentColor'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              stroke-width='2'
                              className='w-6 h-6'
                              viewBox='0 0 24 24'
                            >
                              <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                              <circle cx='12' cy='7' r='4'></circle>
                            </svg>
                          </div>
                        )} */}
                      <div className='flex-grow'>
                        <h2 className='text-gray-900 title-font font-medium'>
                          @{profile.handle}
                        </h2>
                        <p className='text-gray-500'>
                          {profile?.bio && profile?.bio?.length > 20
                            ? profile?.bio?.slice(0, 50) + '...'
                            : profile?.bio ?? 'No Bio Found'}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </>
      {/* )} */}
    </div>
  );
}
