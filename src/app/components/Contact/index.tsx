'use client';
import gsap from 'gsap';
import Image from 'next/image';
import palms from '@/images/estates/palms.jpg';
import { useEffect } from 'react';
import SplitType from 'split-type';
import Link from 'next/link';

export const Contact = () => {
  useEffect(() => {
    const contactEffect = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.dynasty-contact-container',
          start: '60% bottom',
        },
      });

      const ourText = new SplitType('.dynasty-contact-inside h1');

      tl.fromTo(
        ourText.chars,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
          duration: 1.5,
          ease: 'power4.out',
        },
        0.5
      );

      const ourPara = new SplitType('.dynasty-contact-para');

      tl.fromTo(
        ourPara.lines,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.01,
          duration: 0.7,
          ease: 'power4.out',
        },
        0.5
      );

      tl.fromTo(
        '.dynasty-contact-email',
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.01,
          duration: 0.7,
          ease: 'power4.out',
        },
        0.5
      ).fromTo(
        '.dynasty-contact-number',
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.01,
          duration: 0.7,
          ease: 'power4.out',
        },
        0.5
      );
    };

    const el1 = document.querySelectorAll('.first-row figure');
    const el2 = document.querySelectorAll('.second-row figure');
    const el3 = document.querySelectorAll('.third-row figure');

    contactEffect();
  }, []);
  return (
    <div className="dynasty-contact-container w-screen h-[30vh] overflow-hidden flex justify-center items-center absolute bottom-0 z-[1]">
      <div className="dynasty-contact w-full h-full flex items-center justify-center z-[10]">
        <div className="h-full flex flex-col justify-center">
          <Image src={palms} alt="" fill objectFit="cover" sizes='100%'/>
        </div>
        <div className="dynasty-contact-inside relative h-[60%] w-[80%] flex items-center justify-center">
          {/* <p className="titillium  dynasty-contact-email text-[10px] md:text-[15px]">
            Our Email -
            <span className="text-blue-500 text-[10px] md:text-[15px]">
              <Link href="mailto:hello@dynastyrealestate.ae">
                hello@dynastyrealestate.ae
              </Link>
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
};
