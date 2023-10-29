// export default function ErrorPage() {
//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center flex-auto">
//       <div>
//         <Lottie animationData={ErrorCone} loop={true} className="h-80 w-80" />
//       </div>
//       <div className="flex justify-center  flex-col items-center text-gray-secondary font-light">
//         <p className="text-6xl">Error 404!</p>
//         <p className="text-3xl">This page is unknown or does not exist</p>
//       </div>
//     </div>
//   );
// }

// ErrorPage.hideLayout = true;
// ErrorPage.noAuth = true;

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center flex-auto">
      <div className="flex justify-center  flex-col items-center text-gray-secondary font-light">
        <p className="text-6xl">Error 404!</p>
        <p className="text-3xl">This page is unknown or does not exist</p>
      </div>
    </div>
  );
}
