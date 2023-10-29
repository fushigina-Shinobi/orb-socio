import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  try {
    const { searchParams } = req.nextUrl;
    const title = searchParams.get('title') || 'Lens Protocol';
    const description =
      searchParams.get('description') || 'Web-3 Social Layer Solution';

    return new ImageResponse(
      (
        <div tw='flex flex-col w-full h-full items-center justify-center bg-white'>
          <div tw='bg-gray-50 flex w-full'>
            <div tw='flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8'>
              <h2 tw='flex flex-col text-xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left'>
                <span tw='text-[#884F5D] font-medium'>{title}</span>
                <span tw='text-[#C58E96]'>{description}</span>
              </h2>
              <div tw='mt-8 flex md:mt-0'>
                <div tw='flex rounded-md shadow'>
                  <a tw='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-1 py-1 text-xs font-medium text-white'>
                    Get started
                  </a>
                </div>
                <div tw='ml-3 flex rounded-md shadow'>
                  <a tw='flex items-center justify-center rounded-md border border-transparent bg-white px-2 py-1 text-xs font-medium text-indigo-600'>
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      { width: 250, height: 250 }
    );
  } catch (error) {
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
