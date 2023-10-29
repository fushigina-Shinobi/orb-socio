import getInitialName from '@/utils/getInitialName';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  try {
    const { searchParams } = new URL(req.url);
    const handle = searchParams.get('handle') || 'No handle';
    const avatar = searchParams.get('avatar') || 'Profile picture missing';
    const cover = searchParams.get('cover');
    const bio = searchParams.get('bio') || 'Bio not found';

    // const coverUrl =
    //   cover &&
    //   `${protocol}//${host}/_next/image?url=${encodeURIComponent(
    //     cover
    //   )}&w=1200&q=75`;

    // const avatarUrl =
    //   avatar &&
    //   `${protocol}//${host}/_next/image?url=${encodeURIComponent(
    //     avatar
    //   )}&w=1200&q=75`;

    return new ImageResponse(
      (
        <div tw='w-full h-full flex flex-col justify-end items-stretch justify-end bg-white'>
          {cover ? (
            <img
              src={cover}
              alt={handle}
              tw='w-full h-full bg-blue-500'
              width='1200'
              height='75'
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          ) : (
            <div tw='flex justify-center items-center text-gray-500'>
              Image Not Found
            </div>
          )}
          <div tw='mx-4 flex bg-white' style={{ columnGap: '10px' }}>
            {avatar ? (
              <img
                src={avatar}
                alt={handle}
                tw='-mt-10 h-20 w-20 rounded-full border-2'
                width='1200'
                height='75'
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            ) : (
              <div
                tw='-mt-10 h-16 w-16 rounded-full border-2 relative'
                style={{ backgroundColor: '#884F5D' }}
              >
                <h3 tw='text-tertiary absolute top-11 left-14 text-3xl'>
                  {getInitialName(handle)}
                </h3>
              </div>
            )}

            <div tw='flex-auto h-28 -mt-4 flex flex-col'>
              <p tw='text-xl' style={{ color: '#8EC3B0' }}>
                @{handle?.length > 30 ? handle.slice(0, 30) + '...' : handle}
              </p>
              <p tw='text-sm -mt-2' style={{ color: '#884F5D' }}>
                {bio?.length > 145 ? bio.slice(0, 145) + '...' : bio}
              </p>
            </div>
          </div>
        </div>
      ),
      { width: 526, height: 275 }
    );
  } catch (error) {
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
