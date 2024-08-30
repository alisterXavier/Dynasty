'use client';
import { useGSAP } from '@gsap/react';
import { motion, stagger } from 'framer-motion';
import gsap from 'gsap';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  // const isSmallScreen = useSmallDeviceSize();
  // const isAdmin = useIsAdmin();
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const { context } = useGSAP();

  const handleClick = () => {
    if (navToggle) {
      const animate_out = () =>
        context.add(() => [
          gsap.to('.nav_item', {
            x: -100,
            opacity: 0,
            stagger: {
              amount: 0.5,
            },
            onComplete: () => {
              setNavToggle(false);
            },
          }),
        ]);
      animate_out();
    } else setNavToggle(true);
  };

  useGSAP(
    () => {
      gsap.to('.nav', {
        height: '10vh',
        backdropFilter: 'blur(10px)',
        background: '#f5f5fa',
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top 5%',
          end: 'bottom 60%',
          scrub: true,
        },
        onComplete: () => {
          gsap.fromTo(
            '.nav_logo_text',
            {
              autoAlpha: 1,
            },
            {
              autoAlpha: 0,
              scrollTrigger: {
                trigger: '.hero-section',
                start: 'top -10%',
                end: 'bottom 60%',
                scrub: true,
              },
            }
          );
          gsap.fromTo(
            '.nav_logo',
            {
              autoAlpha: 0,
            },
            {
              autoAlpha: 1,
              scrollTrigger: {
                trigger: '.hero-section',
                start: 'top 0%',
                end: 'bottom 60%',
                scrub: true,
              },
            }
          );
        },
      });
    },
    {
      dependencies: [],
    }
  );

  useGSAP(
    () => {
      if (navToggle) {
        gsap.fromTo(
          '.nav_item',
          { x: -100, opacity: 0 },
          {
            x: 0,
            delay: 0.5,
            opacity: 1,
            stagger: {
              amount: 0.5,
            },
          }
        );
      }
    },
    {
      dependencies: [navToggle],
    }
  );
  return (
    <div className="nav fixed top-0 h-[10vh] md:h-[15vh] w-screen z-[100] invisible border-b">
      <div className="h-full flex items-center justify-center">
        <div className="fixed z-[11] top-[50%] -translate-y-[50%] left-5 burger-icon">
          <label
            className="burger w-[25px] h-[25px] md:w-[40px] md:h-[40px]"
            htmlFor="burger"
          >
            <input
              className="line"
              type="checkbox"
              id="burger"
              onChange={handleClick}
            />
          </label>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-[100px] md:w-[150px] h-full">
            <Link
              href="/"
              className="absolute optima text-[11px] md:text-[17px] top-[50%] -translate-y-[50%] nav_logo_text w-full h-[10px] md:h-[17px] text-center"
            >
              DYNASTY
            </Link>
            <Link href={'/'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 350 80"
                width="2000"
                height="800"
                className="nav_logo absolute z-[10] top-[50%] -translate-y-[50%] left-0 w-[100px] h-[100px] md:!w-[150px] md:!h-[100px] invisible"
              >
                <text
                  id="theText"
                  height={'100%'}
                  x="50%"
                  y="100%"
                  transform="translate(0, 30)"
                  text-anchor="middle"
                  font-size="170"
                  fill="black"
                  className="linguistics clipped"
                >
                  D
                </text>
                <text
                  id="sub-text"
                  x="50%"
                  y="50%"
                  text-anchor="middle"
                  font-size="40"
                  fill="black"
                  dominant-baseline="center"
                  transform="translate(0, 24)"
                  className="optima"
                >
                  DYNASTY
                </text>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <motion.nav
        className={`fixed top-0 z-[10] h-screen flex flex-col items-center overflow-hidden transition-all duration-300 ${
          navToggle ? 'w-screen md:w-[50vw]' : 'w-[0px]'
        }`}
        // animate={{
        //   width: navToggle ? '50vw' : 0,
        // }}
      >
        <motion.div className="nav-menu w-screen md:w-[50vw] h-full bg-offwhite flex items-center">
          <div className="pl-5 overflow-hidden flex flex-col">
            <Link
              href={'/'}
              className='nav_item relative text-[40px] optima uppercase cursor-pointer hover:translate-x-4 herte after:content("") z-[1] after:absolute after:bottom-[0%] after:left-[0%] after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all'
            >
              Home
            </Link>
            {/* <Link
              href={'/'}
              className='nav_item relative text-[40px] optima uppercase cursor-pointer hover:translate-x-4 herte after:content("") z-[1] after:absolute after:bottom-[0%] after:left-[0%] after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all'
            >
              Properties
            </Link> */}
            <Link
              href={'/team'}
              className='nav_item relative text-[40px] optima uppercase cursor-pointer hover:translate-x-4 herte after:content("") z-[1] after:absolute after:bottom-[0%] after:left-[0%] after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all'
            >
              Meet the Team
            </Link>
            <Link
              href={'#partners'}
              className='nav_item relative text-[40px] optima uppercase cursor-pointer hover:translate-x-4 herte after:content("") z-[1] after:absolute after:bottom-[0%] after:left-[0%] after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all'
            >
              Partners
            </Link>
            <Link
              href={'/contact'}
              className='nav_item relative text-[40px] optima uppercase cursor-pointer hover:translate-x-4 herte after:content("") z-[1] after:absolute after:bottom-[0%] after:left-[0%] after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all'
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
