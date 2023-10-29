import SinglePublication from '@/components/Posts/SinglePublication';
// import { client, getSinglePublication } from '../api';

export default function EachPublication() {
  return (
    <>
      <SinglePublication />
    </>
  );
}

// export async function getServerSideProps({ params }) {
//   try {
//     const publica = params.publicationId;
//     const pub = await client.query({
//       query: getSinglePublication,
//       variables: {
//         publicationId: publica,
//       },
//     });
//     const publications = pub;

//     return {
//       props: {
//         publications,
//       },
//     };
//   } catch (error) {
//     console.log(error, 'err');
//     return {
//       props: {
//         publications: [],
//       },
//     };
//   }
// }
