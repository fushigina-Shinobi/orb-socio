import SingleProfile from '@/components/Profile/SingleProfile';
import { client, getPublications, getProfile } from '../api';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function EachProfile() {
  const [profile, setProfile] = useState(null);
  const [publications, setPublications] = useState([]);
  const pathName = usePathname();
  const handle = pathName?.split('/')[2];

  useEffect(() => {
    if (handle) {
      fetchProfile();
    }
  }, [handle]);

  async function fetchProfile() {
    try {
      const returnedProfile = await client.query({
        query: getProfile,
        variables: { handle },
      });
      setProfile(returnedProfile.data.profile);
      const pubs = await client.query({
        query: getPublications,
        variables: {
          id: returnedProfile.data.profile.id,
          limit: 50,
        },
      });
      setPublications(pubs.data.publications.items);
    } catch (err) {
      console.log('error fetching profile...', err);
    }
  }

  return (
    <>
      <SingleProfile
        profile={profile}
        publications={publications}
        handle={handle}
      />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { profileId } = context.params;
//   try {
//     const returnedProfile = await client.query({
//       query: getProfile,
//       variables: { profileId },
//     });
//     const profileData = returnedProfile.data.profile;
//     const pubs = await client.query({
//       query: getPublications,
//       variables: {
//         id: returnedProfile.data.profile.id,
//         limit: 50,
//       },
//     });
//     const publicationData = pubs.data.publications.items;
//     console.log('returnedProfile', returnedProfile);

//     return {
//       props: {
//         profileData,
//         publicationData,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         profileData: null,
//         publicationData: null,
//         loading: false,
//       },
//     };
//   }
// }
