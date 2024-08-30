/* eslint-disable @next/next/no-img-element */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';

export const Second = () => {
  useGSAP(
    () => {
      gsap.fromTo(
        '.dynasty-journey-img-container',
        {
          clipPath: 'inset(100%)',
        },
        {
          duration: 1.5,
          ease: 'back.out(1.7)",',
          clipPath: 'inset(0%)',
          scrollTrigger: {
            trigger: '.dynasty-journey',
            start: 'top center',
          },
        }
      );
    },
    {
      dependencies: [],
    }
  );
  return (
    <div className="min-w-screen h-screen flex-col md:flex-row flex items-center justify-center dynasty-journey p-5 border-b-[2px]">
      <div className="w-full md:w-[50%] h-[50%] md:h-screen flex items-center justify-center">
        <div className="w-full h-full overflow-hidden relative flex items-center justify-center">
          <figure className="dynasty-journey-img-container w-[500px] h-full overflow-hidden relative">
            <Image
              src="/images/estates/dubai_skyline.jpg"
              className="top-0 w-[500px] h-[583px]"
              fill
              objectFit="contain"
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="w-full md:w-[50%] mt-5">
        <div className="">
          <h1 className="text-[20px] md:text-[40px] optima">
            Explore Our Journey
          </h1>
          <p className="titillium">
            5+ years of leadership in Dubai&apos;s real estate market.
          </p>
        </div>
        <div className="grid grid-cols-3 mt-5 w-[50%]">
          <div className="w-[70%] border-r-[2px]">
            <p className="text-[15px] optima">Portfolio</p>
            <p className="text-[30px] titillium">1B+</p>
          </div>
          <div className="w-[70%] border-r-[2px]">
            <p className="text-[15px] optima">Clients</p>
            <p className="text-[30px] titillium">300+</p>
          </div>
          <div className="w-[70%] border-r-[2px]">
            <p className="text-[15px] optima">Properties</p>
            <p className="text-[30px] titillium">150+</p>
          </div>
        </div>
      </div>
    </div>
  );
};
