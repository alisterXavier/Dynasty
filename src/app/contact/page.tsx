'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SplitType from 'split-type';

function Mapsn() {
  const tabs = [
    {
      title: 'Moto City',
      value: 'Moto_City',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 text-xl md:text-4xl font-bold text-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.0136663048892!2d55.272308580272515!3d25.18642937693704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f696f4b13e041%3A0xad9e6b0f66c4925c!2sDynasty%20Real%20Estate!5e0!3m2!1sen!2sae!4v1725086344362!5m2!1sen!2sae"
            className="absolute w-[500px] h-[200px] md:w-[600px] md:h-[450px]"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ),
    },
    {
      title: 'Business Bay',
      value: 'Business_Bay',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 text-xl md:text-4xl font-bold text-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d537.3216353993158!2d55.23294577244476!3d25.04578991957862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f4b2c854bfd%3A0x2d15d47e501eb972!2sKojak%20Building!5e0!3m2!1sen!2sae!4v1725086190731!5m2!1sen!2sae"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="absolute w-[500px] h-[200px] md:w-[600px] md:h-[450px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ),
    },
    {
      title: 'Sustainable City',
      value: 'Sustainable_City',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl py-10 text-xl md:text-4xl font-bold text-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1074.8008530401435!2d55.27427528445698!3d25.027803969466156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f71f3cb2599a1%3A0x6075036f6e764c4e!2sThe%20Sustainable%20City%20plaza!5e0!3m2!1sen!2sae!4v1725086017719!5m2!1sen!2sae"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="absolute w-[500px] h-[200px] md:w-[600px] md:h-[450px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] px-10 md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start"></div>
  );
}

const Form = () => {
  return (
    <form action="contact/send_email.php" method="post" className="w-full">
      <div className="grid grid-cols-2 gap-3 my-3">
        <div className="form-group flex flex-col">
          <label
            htmlFor="firstname"
            className="titillium text-[10px] md:text-[15px]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="p-3 outline-transparent"
          />
        </div>
        <div className="form-group flex flex-col">
          <label
            htmlFor="firstname"
            className="titillium text-[10px] md:text-[15px]"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            required
            className="p-3 outline-transparent"
          />
        </div>
      </div>

      <div className="form-group flex flex-col my-3">
        <label
          htmlFor="message"
          className="titillium text-[10px] md:text-[15px]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="resize-none outline-none p-5"
        ></textarea>
      </div>

      <div className="w-[40%] h-[50px] my-3">
        <div className="form-group flex items-center justify-center my-3 relative h-full">
          <label
            htmlFor="file"
            className="titillium text-[10px] md:text-[15px] text-center flex items-center justify-center w-[70%] h-full text-offwhite z-[2] !cursor-pointer bg-[var(--bg)]"
          >
            Resume/CV
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className="titillium text-[10px] md:text-[15px] opacity-0 absolute z-[-1]"
          />
          <label htmlFor="file" className="titillium text-[10px] w-[30%]">
            {}
          </label>
        </div>
        {/* <div className="form-group my-3">
          <label className="titillium text-[10px] md:text-[15px]">
            Are you in UAE?
          </label>
          <div className="radio-group flex items-center">
            <label className="titillium text-[10px] md:text-[15px] mr-5">
              <input type="radio" name="agreement" value="yes" required />
              Yes
            </label>
            <label className="titillium text-[10px] md:text-[15px]">
              <input type="radio" name="agreement" value="no" required />
              No
            </label>
          </div>
        </div> */}
      </div>

      <div className="form-group h-[50px] ">
        <button
          type="submit"
          className="bg-[var(--bg)] text-offwhite h-full w-[200px]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const chars = new SplitType(
        ref.current?.querySelector('.headline') as HTMLElement
      ).chars;

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          skewY: '50px',
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          skewY: 0,
          filter: 'blur(0px)',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 70%',
          },
          stagger: {
            amount: 1,
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
      className="contact min-h-screen p-5 flex flex-col justify-center items-center"
      ref={ref}
    >
      <div className="w-[50%]">
        <div className="text-center">
          <h1 className="headline optima text-[20px] md:text-[40px]">
            Build Your Future with Dynasty
          </h1>
          <p className="titillium text-[10px] md:text-[15px]">
            Join our team and shape the future of real estate in Dubai.
          </p>
        </div>
        <div className="w-full">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
