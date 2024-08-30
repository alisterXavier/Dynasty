'use client'
import Image from 'next/image';
import { Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const partners = [
  '/images/partners/deyaar.png',
  '/images/partners/damac.png',
  '/images/partners/dubai-holding.png',
  '/images/partners/emaar.png',
  '/images/partners/meraas.png',
  '/images/partners/meydan.png',
  '/images/partners/nakheel.png',
  '/images/partners/sobha.png',
];

export const Partners = () => {
  return (
    <div className="h-[30vh] md:h-[50vh] w-full flex flex-col items-center justify-center p-5 bg-offwhite" id='partners'>
      <div className="w-[80%] h-full flex flex-col items-center justify-center">
        <h1 className="optima md:text-[40px] text-[20px]">
          OUR PARTNERS
        </h1>
        <p className="titillium md:text-[16px] text-[13px]">
          Collaborating with Excellence.
        </p>
      </div>
      <div className="flex w-full h-[200px]">
        <Swiper
          mousewheel={true}
          autoplay={{
            delay: 1800,
          }}
          modules={[Mousewheel, Autoplay]}
          breakpoints={{
            200: {
              width: 350,
              slidesPerView: 2,
              spaceBetween: 40,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            1024: {
              width: 1350,
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper transition-all duration-75"
        >
          {partners.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <figure className="relative w-[200px] h-[100px]">
                  <Image
                    src={image}
                    alt=""
                    objectFit="contain"
                    fill
                    sizes="100%"
                    className="mix-blend-multiply"
                  />
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
