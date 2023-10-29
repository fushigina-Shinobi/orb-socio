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
    //   cover &&
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
          <div tw='mx-20 flex bg-white' style={{ columnGap: '40px' }}>
            {avatar ? (
              <img
                src={avatar}
                alt={handle}
                tw='-mt-28 h-60 w-60 rounded-full border-2'
                width='1200'
                height='75'
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            ) : (
              <div
                tw='-mt-24 h-36 w-36 rounded-full border-2 relative'
                style={{ backgroundColor: '#884F5D' }}
              >
                <h3 tw='text-tertiary absolute top-11 left-14 text-5xl'>
                  {getInitialName(handle)}
                </h3>
              </div>
            )}

            <div tw='flex flex-col' style={{ rowGap: '8px' }}>
              <p tw='text-4xl' style={{ color: '#8EC3B0' }}>
                @{handle}
              </p>
              <p tw='text-2xl -mt-4' style={{ color: '#884F5D' }}>
                {bio}
              </p>
            </div>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (error) {
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
