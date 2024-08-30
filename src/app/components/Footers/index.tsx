'use client';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <div className="dynasty-move min-h-[70vh] flex justify-center items-center bg-[var(--bg)] shadow-[10px_100px_100px_0px_rgba(0,0,0,0.3)] p-10">
      <div className="w-full md:h-[50%] h-full flex justify-center flex-wrap">
        <div className="flex flex-wrap justify-evenly w-full">
          <div className="w-[250px] md:h-[100%] my-5 md:my-0">
            <h1 className="text-[20px]  optima text-white">
              The Burlington Tower
            </h1>
            <div className="h-[90%] flex flex-col justify-evenly">
              <p className="md:text-[16px] text-[13px] titillium text-white">
                <span className="block">Business Bay,</span>
                <span className="block">Marasi Drive Dubai-UAE</span>
              </p>
              <p className="md:text-[16px] text-[13px] text-white titillium">
                +971 58 599 3405
              </p>
            </div>
          </div>

          <div className="w-[250px] md:h-[100%] my-5 md:my-0">
            <h1 className="text-[20px]  optima text-white">Motor City</h1>
            <div className="h-[90%] flex flex-col justify-evenly">
              <p className="md:text-[16px] text-[13px] text-white titillium">
                <span className="block">Kojak Group Building,</span>
                <span className="block">Dubai-UAE</span>
              </p>
              <p className="md:text-[16px] text-[13px] text-white titillium">
                +971 58 599 3405
              </p>
            </div>
          </div>

          <div className="w-[250px] md:h-[100%] my-5 md:my-0">
            <h1 className="text-[20px]  optima text-white">Sustainable City</h1>
            <div className="h-[90%] flex flex-col justify-evenly">
              <p className="md:text-[16px] text-[13px] text-white titillium">
                <span className="block">Community Plaza,</span>
                <span className="block">Dubai-UAE</span>
              </p>
              <p className="md:text-[16px] text-[13px] text-white titillium">
                +971 58 599 3405
              </p>
            </div>
          </div>

          <div className="w-[250px] md:w-[150px] flex flex-col justify md:h-full my-5 md:my-0">
            <h1 className="text-[20px] text-white optima ">Explore</h1>
            <div className="flex flex-col items-center justify-center h-[90%]">
              {/* <motion.a
                href="/properties"
                className="
                md:text-[16px] text-[13px]
                        block py-2 w-[200px] cursor-pointer hover:ml-2 transition-all
                        after:block after:content-[''] after:w-[0px] after:bg-white after:bottom-0 after:left-0 after:h-[1px] hover:after:w-[50%] after:transition-all
                        after:duration-200 text-white optima text-sm"
              >
                Properties
              </motion.a> */}
              <motion.a
                href="/team"
                className="
                md:text-[16px] text-[13px]
                        block py-2 w-full cursor-pointer hover:ml-2 transition-all
                        after:block after:content-[''] after:w-[0px] after:bg-white after:bottom-0 after:left-0 after:h-[1px] hover:after:w-[50%] after:transition-all
                        after:duration-200 text-white optima text-sm"
              >
                Team
              </motion.a>
              <motion.a
                href="/contact"
                className="
                md:text-[16px] text-[13px]
                        block py-2 w-full cursor-pointer hover:ml-2 transition-all
                        after:block after:content-[''] after:w-[0px] after:bg-white after:bottom-0 after:left-0 after:h-[1px] hover:after:w-[50%] after:transition-all
                        after:duration-200 text-white optima text-sm"
              >
                Contact
              </motion.a>
              <motion.a
                href="/contact"
                className="
                md:text-[16px] text-[13px]
                        block py-2 w-full cursor-pointer hover:ml-2 transition-all
                        after:block after:content-[''] after:w-[0px] after:bg-white after:bottom-0 after:left-0 after:h-[1px] hover:after:w-[50%] after:transition-all
                        after:duration-200 text-white optima text-sm"
              >
                Careers
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
