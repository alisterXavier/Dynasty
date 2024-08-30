import burj_arab from '@/images/estates/burj_arab1.jpg';
import living from '@/images/estates/living.jpg';
import villas from '@/images/estates/villas.jpg';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

export const First = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const images = ref.current?.querySelectorAll('figure')!;
      const video = ref.current?.querySelectorAll('video')!;
      const text = ref.current?.querySelector('.section-text')!;
      gsap.fromTo(
        [text, ...Array.from(images).slice(0, 2)],
        { y: 100 },
        {
          y: -200,
          scrollTrigger: {
            trigger: ref.current,
            scrub: true,
            start: 'top 20%',
            end: 'bottom -50%',
          },
        }
      );
      gsap.fromTo(
        [video, ...Array.from(images).slice(2, 3)],
        { y: 100 },
        {
          y: -100,
          scrollTrigger: {
            trigger: ref.current,
            scrub: true,
            start: 'top 20%',
            end: 'bottom -50%',
          },
        }
      );
    },
    {
      dependencies: [],
    }
  );
  return (
    <div
      className="relative w-screen h-screen flex flex-col items-center justify-center p-5"
      ref={ref}
    >
      <div className="relative z-10 w-full md:w-[35%] text-center section-text">
        <h1 className="text-[20px] md:text-[40px] optima w-full text-center">
          Your ideal home is more than a property—it&apos;s a Dynasty.
        </h1>
        <p className="titillium text-[10px]">
          Experience a legacy of excellence where your dreams and future are
          built with every home we find.
        </p>
      </div>
      <div className="absolute w-full h-full top-0 left-0 perspective-1000 transform-style-3d">
        <motion.figure className="absolute w-[150px] h-[150px] md:w-[400px] md:h-[450px] right-[5%] top-[20%] md:top-[10%] -translate-z-[30px]">
          <Image
            src={burj_arab}
            fill
            objectFit="contain"
            sizes="100%"
            alt="burj"
          />
        </motion.figure>
        <motion.figure className="absolute w-[100px] h-[100px] md:w-[350px] md:h-[300px] left-[5%] top-[5%] -translate-z-[90px]">
          <Image
            src={villas}
            fill
            objectFit="contain"
            sizes="100%"
            alt="villas"
          />
        </motion.figure>
        <motion.video
          className="absolute w-[100px] h-[200px] md:w-[350px] md:h-[300px] left-[10%] md:left-[15%] bottom-[10%] -translate-z-[160px]"
          autoPlay
          loop
          muted
        >
          <source src="/videos/untitled-2.mp4" />
        </motion.video>
        <motion.figure className="absolute w-[180px] h-[150px] md:w-[350px] md:h-[300px] right-[0%] md:right-[10%] bottom-0 md:-bottom-[20%] -translate-z-[280px]">
          <Image
            src={living}
            fill
            objectFit="contain"
            sizes="100%"
            alt="living"
          />
        </motion.figure>
      </div>
    </div>
  );
};
