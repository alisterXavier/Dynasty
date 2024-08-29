'use client';
import { IconLocation, IconPhone } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <div className="dynasty-move min-h-[60vh] flex justify-center items-center md:p-0 py-[40px] bg-[var(--bg)] shadow-[10px_100px_100px_0px_rgba(0,0,0,0.3)]">
      <div className="w-[80%] md:h-[40%] h-full flex flex-wrap">
        <div className="flex flex-wrap md:w-[80%] w-full h-[100%]">
          <div className="md:w-[50%] w-full h-[100%] my-5">
            <h1 className="text-[20px] my-5 optima text-white">Head Office</h1>
            <div className="h-[90%] flex flex-col justify-evenly">
              <div className="flex my-3 items-center">
                <div className="p-5">
                  <IconLocation color="white" />
                </div>
                <div>
                  <p className="text-white optima">Address</p>
                  <p className="md:text-[16px] text-[13px] titillium text-white">
                    The Burlington Tower Business Bay, Marasi Drive Dubai -UAE
                  </p>
                </div>
              </div>
              <div className="flex my-3 items-center">
                <div className="p-5">
                  <IconPhone color="white" />
                </div>
                <div>
                  <div>
                    <p className="text-white optima">Phone</p>
                    <p className="md:text-[16px] text-[13px] text-white titillium">
                      58 599 3405
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[50%] w-full h-[100%] my-5">
            <h1 className="text-[20px] my-5 optima text-white">
              Motor City Branch
            </h1>
            <div className="h-[90%] flex flex-col justify-evenly">
              <div className="flex my-3 items-center">
                <div className="p-5">
                  <IconLocation color="white" />
                </div>
                <div>
                  <p className="text-white optima">Address</p>
                  <p className="md:text-[16px] text-[13px] text-white titillium">
                    Kojak Group Building, Moto City, Dubai-UAE
                  </p>
                </div>
              </div>
              <div className="flex my-3 items-center">
                <div className="p-5">
                  <IconPhone color="white" />
                </div>
                <div>
                  <div>
                    <p className="text-white optima">Phone</p>
                    <p className="md:text-[16px] text-[13px] text-white titillium">
                      58 599 3405
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:my-0 my-5  md:w-[20%] h-[100%]">
          <div className="my-5">
            <h1 className="text-[20px] text-white optima my-5">Explore</h1>
          </div>
          <div className="flex flex-col">
            {/* <motion.a
                href="/about"
                className="
                md:text-[16px] text-[13px]
                        block py-2 w-[200px] cursor-pointer hover:ml-2 transition-all
                        after:block after:content-[''] after:w-[0px] after:bg-white after:bottom-0 after:left-0 after:h-[1px] hover:after:w-[200px] after:transition-all
                        after:duration-200 text-white optima"
              >
                About
              </motion.a> */}
            <motion.a
              href="/properties"
              className="
                md:text-[16px] text-[13px]
                        block py-2 w-[200px] cursor-pointer hover:ml-2 transition-all
                        after:block after:content-[''] after:w-[0px] after:bg-white after:bottom-0 after:left-0 after:h-[1px] hover:after:w-[200px] after:transition-all
                        after:duration-200 text-white optima text-sm"
            >
              Properties
            </motion.a>
            {/* <motion.a
                href="/services"
                className="
                md:text-[16px] text-[13px]
                        block py-2 w-[200px] cursor-pointer hover:ml-2 transition-all
                        after:block after:content-[''] after:w-[0px] after:bg-white after:bottom-0 after:left-0 after:h-[1px] hover:after:w-[200px] after:transition-all
                        after:duration-200 text-white optima text-sm"
              >
                Our Services
              </motion.a> */}
            <motion.a
              href="/team"
              className="
                md:text-[16px] text-[13px]
                        block py-2 w-[200px] cursor-pointer hover:ml-2 transition-all
                        after:block after:content-[''] after:w-[0px] after:bg-white after:bottom-0 after:left-0 after:h-[1px] hover:after:w-[200px] after:transition-all
                        after:duration-200 text-white optima text-sm"
            >
              Team
            </motion.a>
            <motion.a
              href="/contact"
              className="
                md:text-[16px] text-[13px]
                        block py-2 w-[200px] cursor-pointer hover:ml-2 transition-all
                        after:block after:content-[''] after:w-[0px] after:bg-white after:bottom-0 after:left-0 after:h-[1px] hover:after:w-[200px] after:transition-all
                        after:duration-200 text-white optima text-sm"
            >
              Contact
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};
