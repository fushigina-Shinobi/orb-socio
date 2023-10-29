// import getInitialName from '@/utils/getInitialName';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  try {
    const { searchParams } = req.nextUrl;
    const title = searchParams.get('title') || 'No title';
    // const logo = searchParams.get('logo') || 'Logo missing';
    const description = searchParams.get('description');

    return new ImageResponse(
      (
        <div tw='w-full h-full flex flex-col justify-end items-stretch justify-end bg-white'>
          <p tw='text-2xl'>{title}</p>
          <div tw='flex justify-center items-center text-gray-500'>
            {description ?? 'Data Not Found'}
          </div>
          {/* <div tw='mx-20 flex gap-x-10 bg-white'>
            {logo ? (
              <img
                src={logo}
                alt={title}
                tw='-mt-28 h-60 w-60 rounded-full border-2'
                width='1200'
                height='75'
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            ) : (
              <div tw='-mt-24 h-36 w-36 rounded-full border-2 bg-primary relative'>
                <h3 tw='text-tertiary absolute top-11 left-14 text-5xl'>
                  {getInitialName(title)}
                </h3>
              </div>
            )}
          </div> */}
        </div>
      ),
      { width: 1200, height: 628 }
    );
  } catch (error) {
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
