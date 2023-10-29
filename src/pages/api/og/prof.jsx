// // pages/api/og.js
// import { createOG } from '@vercel/og';
// import { useProfile } from '@lens-protocol/react-web'; // Import your SDK hook here

// export default async (req, res) => {
//   const { profileId } = req.query;

//   console.log('han', req.query);

//   try {
//     // Fetch the profile data using your SDK hook
//     const { data: profile, loading } = useProfile({ profileId });

//     if (loading || !profile) {
//       res.status(404).send('Profile data not found');
//       return;
//     }

//     // Generate the OG image URL
//     const imageURL = generateOGImageURL(profile);

//     // Generate the OG image
//     const image = await createOG({
//       image: imageURL,
//       template: 'basic', // You can create custom templates or use built-in templates
//     });

//     res.setHeader('Content-Type', 'image/png');

//     res.send(image);
//   } catch (error) {
//     res.status(500).send('Internal Server Error');
//   }
// };

// // Function to generate the OG image URL based on the profile data
// function generateOGImageURL(profile) {
//   const avatar = encodeURIComponent(profile?.picture?.original?.url);
//   const cover = encodeURIComponent(profile?.coverPicture?.original?.url);
//   const bio = encodeURIComponent(profile?.bio);
//   const name = encodeURIComponent(profile?.handle ?? 'kishore');

//   const imageURL = `http://localhost:3000/api/og/prof?handle=${name}&avatar=${avatar}&cover=${cover}&bio=${bio}`;

//   return imageURL;
// }
