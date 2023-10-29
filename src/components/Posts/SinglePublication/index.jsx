import { useRouter } from 'next/router';
import { usePublications } from '@lens-protocol/react-web';
import Head from 'next/head';
import Link from 'next/link';

export const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
};

export default function SinglePublication() {
  const router = useRouter();
  const { query } = router;
  const postId = query?.publicationId;
  let { data: eachPublication, loading } = usePublications({
    publicationIds: postId,
  });

  eachPublication = eachPublication?.map((publication) => {
    if (publication.__typename === 'Mirror') {
      return publication.mirrorOf;
    } else {
      return publication;
    }
  });

  const imageURL =
    process.env.NEXT_PUBLIC_BASE_URL +
    '/api/og/publication?' +
    'handle=' +
    encodeURIComponent(eachPublication?.[0]?.profile?.handle ?? 'NA') +
    '&avatar=' +
    encodeURIComponent(eachPublication?.[0]?.profile?.picture?.original?.url) +
    '&content=' +
    encodeURIComponent(eachPublication?.[0]?.metadata?.content) +
    '&bio=' +
    encodeURIComponent(eachPublication?.[0]?.profile?.bio);

  if (loading)
    return (
      <p className='p-14 flex justify-center items-center flex-auto'>
        Loading ...
      </p>
    );

  return (
    <div className='w-full flex flex-col flex-auto bg-mainBg'>
      <Head>
        <meta property='og:image' content={imageURL} />
        <meta name='twitter:image' content={imageURL} />
      </Head>
      {/* {eachPublication?.map(
        (pub, index) =>
          pub?.__typename === 'Post' && (
            <div
              key={pub?.id}
              className='py-4 rounded mb-3 px-4 shadow-md w-full'
            >
              <p>{pub.metadata.content}</p>
              {pub.metadata?.media[0]?.original &&
                ['image/jpeg', 'image/png'].includes(
                  pub.metadata?.media[0]?.original.mimeType
                ) && (
                  <img
                    width='400'
                    height='400'
                    alt={profile.handle}
                    className='rounded-xl mt-6 mb-2'
                    src={pub.metadata.media[0].original.url}
                  />
                )}
            </div>
          )
      )} */}
      <p className='text-primary py-10 text-center text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl'>
        Publication
      </p>
      <div className='lg:px-20 w-full overflow-x-auto pt-4'>
        <section className='text-gray-700 body-font border-t border-gray-200'>
          <div className='container px-5 pt-10 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div
                className='p-2 lg:w-1/3 md:w-1/2 w-full'
                key={eachPublication?.[0]?.profile?.id}
              >
                <div className='h-full w-full flex items-center border-gray-200 border shadow-sm hover:shadow-md p-4 rounded-lg'>
                  <img
                    alt={eachPublication?.[0]?.profile?.handle}
                    className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 self-baseline'
                    src={
                      eachPublication?.[0]?.profile?.picture?.original?.url ??
                      '/assets/images/noImageFound.png'
                    }
                    onError={(e) => {
                      e.target.src = '/assets/images/noImageFound.png';
                    }}
                  />
                  <div className='flex-grow overflow-hidden'>
                    <h2 className='text-gray-900 title-font font-medium'>
                      {eachPublication?.[0]?.profile?.name ?? 'N/A'}
                    </h2>
                    <Link
                      href={`/profile/${eachPublication?.[0]?.profile?.handle}`}
                      className='text-gray-900 title-font font-medium'
                    >
                      @{eachPublication?.[0]?.profile.handle}
                    </Link>
                    <p className='text-gray-500  break-words'>
                      {eachPublication?.[0]?.metadata?.content ??
                        'No Content Found'}
                    </p>
                    {eachPublication?.[0].metadata?.media[0]?.original &&
                      ['image/jpeg', 'image/png'].includes(
                        eachPublication?.[0].metadata?.media[0]?.original
                          .mimeType
                      ) && (
                        <img
                          width='400'
                          height='400'
                          alt={eachPublication?.[0]?.profile.handle}
                          className='rounded-xl mt-6 mb-2'
                          src={
                            eachPublication?.[0].metadata.media[0].original.url
                          }
                        />
                      )}
                    <p className='text-gray-500  break-words py-2'>
                      {new Date(eachPublication?.[0]?.createdAt).toLocaleString(
                        undefined,
                        options
                      )}
                    </p>
                    <div className='flex justify-between flex-wrap gap-y-4'>
                      <p className='bg-teal-500 rounded text-white py-1 px-2'>
                        7 comments
                      </p>
                      <p className='bg-teal-500 rounded text-white py-1 px-2'>
                        10 likes
                      </p>
                      <p className='bg-teal-500 rounded text-white py-1 px-2 '>
                        2 mirrors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
