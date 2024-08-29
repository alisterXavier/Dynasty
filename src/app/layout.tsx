'use client';
import Navbar from '../components/navbar';
import { Contact, Footer } from './components';
import './globals.css';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, MotionPathPlugin);
ScrollTrigger.addEventListener('refresh', function () {
  if (document.body.getAttribute('style') === '') {
    document.body.removeAttribute('style');
  }
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-offwhite">
        <Navbar />
        <div className='main_container relative z-[2]'>
          {children}
          <Footer />
        </div>
        <Contact />
      </body>
    </html>
  );
}
