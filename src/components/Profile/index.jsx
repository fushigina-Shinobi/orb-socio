import Link from 'next/link';
import { useState } from 'react';

export default function Profile({ profiles }) {
  const [loading, setLoading] = useState(false);

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
                {profiles?.map((profile) => {
                  if (loading) {
                    return (
                      <div
                        className='p-2 lg:w-1/3 md:w-1/2 w-full animate-pulse cursor-not-allowed'
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
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        href={`/profile/${profile?.handle}`}
                        className='p-2 lg:w-1/3 md:w-1/2 w-full'
                        key={profile?.id}
                        onClick={() => setLoading(true)}
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
                    );
                  }
                })}
              </div>
            </div>
          </section>
        </div>
      </>
      {/* )} */}
    </div>
  );
}
