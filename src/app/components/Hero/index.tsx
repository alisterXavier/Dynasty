'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';

const vids = [
  'https://res.cloudinary.com/dboza0n1a/video/upload/v1715441303/aerial-view-of-dubai-expo-2020-united-arab-emirat-2022-08-10-11-55-18-utc_2_mija1p.mp4',
  'https://res.cloudinary.com/dboza0n1a/video/upload/v1715440849/aerial-view-of-sheikh-zayed-road-dubai-united-ar-2022-08-10-10-11-31-utc_1_patftm.mp4',
  'https://res.cloudinary.com/dboza0n1a/video/upload/v1715440842/cityscape_i4jpse.mp4',
  'https://res.cloudinary.com/dboza0n1a/video/upload/v1715440839/aerial-view-of-dubai-frame-landmark-during-the-sun-2022-08-04-10-57-29-utc_2_tstge9.mp4',
  'https://res.cloudinary.com/dboza0n1a/video/upload/v1715440830/aerial-hyperlapse-of-dubai-skyscrapers-during-scen-2022-08-04-10-57-54-utc_1_ccdl8q.mp4',
];

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [vid, setVid] = useState<string>('');

  useGSAP(
    () => {
      setVid(vids[Math.round(Math.random() * 4)]);
      const text = ref.current?.querySelector('#theText')!;
      const sub_text = ref.current?.querySelector('#sub-text')!;
      const svg = ref.current?.querySelector('.overlay .hero-title-container')!;
      const tl = gsap.timeline();
      tl.to(text, { strokeDashoffset: 0, ease: 'linear', duration: 2 })
        .to(text, {
          fill: 'white',
          duration: 0.5,
        })
        .to(sub_text, { opacity: 1, duration: 0.5 }, '<')
        .to(
          svg,
          {
            opacity: 0,
            duration: 2,
          },
          '+=1'
        )
        .to(['.nav', '.hero-wordings'], {
          autoAlpha: 1,
        });
      const onScroll = () => {
        gsap.to(ref.current, {
          height: '100vh',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 0',
            end: 'bottom 0',
            scrub: true,
          },
        });
      };
      onScroll();
    },
    {
      dependencies: [ref],
    }
  );

  return (
    <div
      className="hero-section relative w-screen h-[110vh] z-[1] overflow-hidden bg-black"
      ref={ref}
    >
      <video
        autoPlay
        loop
        muted
        preload="none"
        className="object-cover hero-dynasty-video bg-black w-screen h-[110vh] absolute"
      >
        <source src="https://res.cloudinary.com/dboza0n1a/video/upload/f_auto:video,q_auto/oftey5vusrewytujdjqc" />
      </video>
      <div className="overlay absolute top-0 w-screen h-screen flex justify-center items-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="hero-title-container w-full">
            <svg
              id="dynasty"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 80"
              width="2000"
              height="800"
              className="relative !w-full !h-full !max-w-full !max-h-full"
            >
              <text
                id="theText"
                height={'100%'}
                x="50%"
                y="100%"
                transform="translate(0, -15)"
                stroke-dasharray="100%"
                stroke-dashoffset="100%"
                text-anchor="middle"
                font-size="80"
                fill="transparent"
                stroke="white"
                stroke-width=".5"
                className="linguistics clipped"
              >
                D
              </text>
              <text
                id="sub-text"
                x="50%"
                y="50%"
                text-anchor="middle"
                font-size="13"
                fill="white"
                dominant-baseline="center"
                transform="translate(3, 2)"
                className="optima opacity-0"
              >
                DYNASTY
              </text>
            </svg>

            {/* <div className="relative w-fit overflow-hidden">
              <h2 className="hero-dynasty-sub-title w-fit whitespace-nowrap titillium text-xs md:text-lg text-white opacity-0">
                Real Estate
              </h2>
              <span className="hero-sub-title-cover absolute bg-white w-full h-full left-0 top-0 -translate-x-[100%]" />
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-end relative z-[30] hero-wordings opacity-0">
        <p className="optima text-[20px] text-offwhite h-[10%] flex items-center">
          Dynasty Real Estate{' '}
          <span className="inline-block h-[1px] w-[10px] bg-offwhite mx-[3px]"></span>{' '}
          Dubai, UAE
        </p>
        <h1 className="text-offwhite text-[70px] w-full md:w-[50%] h-[35%] optima leading-[80px] text-center">
          Find Your Piece of Dubai with Dynasty
        </h1>
      </div>
    </div>
  );
};
