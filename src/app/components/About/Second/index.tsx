/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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
    <div className="min-w-screen h-screen md:flex items-center justify-center dynasty-journey p-5">
      <div className="w-full md:w-[50%] h-[50%] md:h-screen flex items-center justify-center">
        <div className="w-[500px] h-full overflow-hidden relative flex items-center justify-center">
          <figure className="dynasty-journey-img-container w-[500px] h-full overflow-hidden border relative">
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
        <h1 className="text-[20px] md:text-[40px] optima">Explore Our Journey</h1>
        <p className="titillium">
          Swipe through our 5+ years of leadership in Dubai&apos;s real estate
          market.
        </p>
      </div>
    </div>
  );
};
