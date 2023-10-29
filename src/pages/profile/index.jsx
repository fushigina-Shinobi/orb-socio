import Profile from '@/components/Profile';
import { client, exploreProfiles } from '../api';

export default function Profilepage({ data, loading }) {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <Profile profiles={data} />
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
        loading: false,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        loading: false,
      },
    };
  }
}
