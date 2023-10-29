import Profile from '@/components/Profile';
import { client, exploreProfiles } from '../api';
import { Suspense } from 'react';

export default function Profilepage({ data }) {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Profile profiles={data} />
      </Suspense>
    </>
  );
}

export async function getServerSideProps() {
  try {
    let response = await client.query({ query: exploreProfiles });
    let profileData = await Promise.all(
      response.data.exploreProfiles.items.filter(async (profileInfo) => {
        return profileInfo.picture.__typename === 'MediaSet';
      })
    );
    const data = profileData;

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
