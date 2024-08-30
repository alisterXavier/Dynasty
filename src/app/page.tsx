'use client';
import {
  Hero,
  Properties,
  Award,
  Testimonials,
  Contact,
  Partners,
  First,
  Second,
  Third,
  Fourth,
} from './components';
import 'swiper/css';
import 'swiper/css/navigation';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactLenis from '@studio-freight/react-lenis';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, MotionPathPlugin);
ScrollTrigger.addEventListener('refresh', function () {
  if (document.body.getAttribute('style') === '') {
    document.body.removeAttribute('style');
  }
});

export default function Home() {
  useGSAP(
    () => {
      gsap.to('.main_container', {
        y: '-35vh',
        scrollTrigger: {
          trigger: '.dynasty-move',
          start: 'top 100%',
          end: "bottom 30%",
          scrub: true,
        },
      });
    },
    {
      dependencies: [],
    }
  );
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        syncTouch: true,
      }}
    >
      <main className="dynasty-real-estate">
        <Hero />

        <div className="dynasty-other">
          <First />
          <Second />
          <Third />
          <Award />
          <Fourth />
          <Partners />
        </div>
        {/* <Advantages /> */}
      </main>
    </ReactLenis>
  );
}
