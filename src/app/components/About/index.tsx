export { First } from './First';
export { Second } from './Second';
export { Third } from './Third';
export { Fourth } from './Fourth';

// import staff from '@/images/staff-group-photo-enhanced.webp';
// import { StaggerPara, StaggerText } from '@/src/components/textStagger';
// import gsap from 'gsap';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useEffect } from 'react';

// export const About = () => {
//   useEffect(() => {
//     gsap.fromTo(
//       '.slide-image',
//       {
//         x: '-100%',
//         opacity: 0,
//       },
//       {
//         x: 0,
//         opacity: 1,
//         duration: 0.9,
//         scrollTrigger: {
//           trigger: '.abt-section',
//           start: '60% bottom',
//         },
//         ease: 'power4.out',
//       }
//     );
//   }, []);

//   return (
//     <div className="abt-section w-screen min-h-screen p-10 flex flex-wrap items-center bg-offwhite">
//       <div className="md:w-[50%] w-full h-[100%] flex items-center justify-center">
//         <figure className="slide-image relative w-full h-[200px] md:w-[600px] md:h-[400px]">
//           <Image src={staff} alt="sad" fill sizes="100%" />
//         </figure>
//       </div>
//       <div className="md:w-[50%] w-full flex justify-center items-center">
//         <div className=" md:w-[80%] flex flex-col justify-center items-center">
//           <div className="w-full">
//             <StaggerText
//               text="Discover Our Uniqueness"
//               start={'60% bottom'}
//               parent={'.abt-section'}
//               className="stagger-text md:text-4xl text-2xl text-black optima flex overflow-hidden"
//             />
//           </div>
//           <div className="flex flex-col justify-center w-full">
//             <StaggerPara
//               text={
//                 'With a distinguished presence spanning over 5 years in the UAE Real Estate market, Dynasty Real Estate stands as a foremost brokerage firm in Dubai. Our esteemed standing is a testament to our unwavering dedication and the favorable results we consistently deliver to our clients, facilitated by a team of highly skilled, professional, and multilingual real estate agents. While initially excelling in the off-plan, resale, and rental sectors, Dynasty Real Estate has since evolved and broadened its scope.'
//               }
//               className="stagger-para md:text-[16px] text-[13px] w-[100%] text-black titillium overflow-hidden"
//               start={'60% bottom'}
//               parent={'.abt-section'}
//             />
//           </div>
//           <div className="w-full my-5">
//             <Link href="/team">
//               <button className="md:text-[16px] text-[13px] px-8 py-2 bg-blue-500 text-white titillium transition duration-200 hover:bg-white hover:text-black border-[1px] border-transparent hover:border-blue-500">
//                 Meet The Team
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
