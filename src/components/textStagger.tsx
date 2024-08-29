const { useEffect, useState, useRef } = require('react');
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import SplitType from 'split-type';

export const StaggerText = ({ text, start, className, parent }: any) => {
  const [isLoaded, setIsLoading] = useState(false);

  useGSAP(
    () => {
      if (isLoaded && text) {
        const ourText = new SplitType('.stagger-text');
        const chars = ourText.chars;
        gsap.fromTo(
          chars,
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
            scrollTrigger: {
              trigger: parent,
              start: start,
            },
          }
        );
      } else setIsLoading(true);
    },
    { dependencies: [isLoaded, parent, start, text] }
  );

  return <p className={className}>{text}</p>;
};
