'use client'
import canal from '@/images/award/IMG-20240505-WA0005.jpg';
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Award = () => {
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      if (isLoading) {
        gsap.fromTo(
          '.dynasty-award figure',
          {
            y: -100,
          },
          {
            // movementFactor: 1,
            y: 100,
            scrollTrigger: {
              trigger: '.dynasty-real-estate',
              start: 'top center',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      }
      setIsLoading(true);
    }, [isLoading]);
  
    return (
      <div className="dynasty-award relative overflow-hidden h-[40vh] flex items-center justify-center">
        <figure className="absolute -top-[100%] md:-top-[150%] -left-[50%] -right-[50%] md:left-0 md:right-0 -bottom-[100%] md:-bottom-[150%] flex items-center justify-center">
          <Image src={canal} alt="" fill objectFit="cover" />
        </figure>
        <div className="relative flex flex-col items-center justify-center z-1 backdrop-blur-[2px] p-5 rounded-md">
          <h1 className="md:text-4xl text-1xl optima text-white">
            Award Winning Real Estate Agency
          </h1>
  
          <p className="md:text-[16px] text-[13px] titillium text-white">
            We Take Pride In Our Diversity
          </p>
        </div>
      </div>
    );
  };
  