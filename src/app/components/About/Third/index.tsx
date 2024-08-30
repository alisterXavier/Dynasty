import team from '@/images/staff-group-photo-enhanced.webp';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
export const Third = () => {
  useGSAP(
    () => {
     
    },
    {
      dependencies: [],
    }
  );
  return (
    <div className="min-w-screen h-screen md:flex items-center justify-center dynasty-discover p-5">
      <div className="w-full md:w-[50%] flex items-center justify-center">
        <div className=''>
          <h1 className="md:text-[40px] optima">
            Discover the Dynasty Difference
          </h1>
          <p className="titillium">
            Meet our team of expert, experienced agents—your partners in
            success.
          </p>
        </div>
      </div>
      <div className="w-full md:w-[50%] h-[50%] flex items-center justify-center">
        <div className="w-[500px] h-[583px] overflow-hidden relative flex items-center justify-center">
          <figure className=" w-[500px] h-[583px] overflow-hidden relative">
            <Image
              src={team}
              className="top-0 w-[500px] h-[583px]"
              fill
              objectFit="contain"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};
