import { Html, Head, Main, NextScript } from 'next/document';

// export default function MyDocument() {

//   return (
//     <Html lang="en">
//       <Head />
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//       {/* Roboto */}
//       <link
//         href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
//         rel="stylesheet"
//       />
//       {/* Poppins */}
//       <link
//         href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
//         rel="stylesheet"
//       ></link>
//       {/* Lato */}
//       <link
//         href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
//         rel="stylesheet"
//       ></link>
//       {/* Montserrat */}
//       <link
//         href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
//         rel="stylesheet"
//       ></link>
//       {/* Libre Franklin */}
//       <link
//         href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
//         rel="stylesheet"
//       ></link>
//       {/* Heebo font */}

//       <link
//         href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap"
//         rel="stylesheet"
//       />

//       <link
//         rel="stylesheet"
//         href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
//         integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
//         crossOrigin=""
//       />
//       <link
//         rel="stylesheet"
//         href="https://unpkg.com/leaflet-geosearch@3.0.0/dist/geosearch.css"
//       />
//       <body>
//         <Main />
//         <div id="sidebar"></div>
//         <NextScript />
//       </body>
//     </Html>
//   );
// }

export default function MyDocument() {
  return (
    <Html lang='en'>
      <Head />
      <link rel='preconnect' href={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
