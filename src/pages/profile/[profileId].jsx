import SingleProfile from '@/components/Profile/SingleProfile';
import { client, getPublications, getProfile } from '../api';
import { Suspense } from 'react';

export default function EachProfile({ profile, publications, handle }) {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <SingleProfile
          profile={profile}
          publications={publications}
          handle={handle}
        />
      </Suspense>
    </>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const handle = params.profileId;

    const returnedProfile = await client.query({
      query: getProfile,
      variables: { handle },
    });

    const profile = returnedProfile.data.profile;

    const pubs = await client.query({
      query: getPublications,
      variables: {
        id: profile.id,
        limit: 20,
      },
    });

    const publications = pubs.data.publications.items;

    return {
      props: {
        profile,
        publications,
        handle,
      },
    };
  } catch (error) {
    return {
      props: {
        profile: null,
        publications: [],
        handle: null,
      },
    };
  }
}
