'use client';
import { BentoGridItem } from '@/src/components/cards';
import { supabase } from '@/src/utils/supabase';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Properties = () => {
  const [data, setData] = useState<any>([]);
  const router = useRouter();
  const getData = async () => {
    const res = await supabase
      .from('Properties')
      .select()
      .order('created_at', { ascending: true })
      .limit(7);

    setData(res.data);
  };

  const swiperRef = useRef<SwiperType | null>(null);

  const ButtonGroup = () => {
    return (
      <div className="carousel-button-group w-[70px] absolute flex justify-between z-[1] right-[5%] top-[10%] cursor-pointer">
        <IconChevronLeft
          color="white"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <IconChevronRight
          color="white"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    );
  };
  useEffect(() => {
    getData();
  }, []);

  if (data.length > 0)
    return (
      <div className="relative flex flex-col justify-center items-center z-[2] h-screen md:h-[80vh] bg-darkButNotBlack">
        <div className="bg-gradient-to-t from-[#13131a] from-[80%] absolute -top-20 left-0 right-0 bottom-[50%] z-1"></div>
        <h1 className="text-white titillium text-[30px] mb-10">
          View Listings
        </h1>
        <Swiper
          mousewheel={true}
          autoplay={{
            delay: 3000,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Mousewheel, Autoplay, Navigation]}
          breakpoints={{
            200: {
              width: 300,
              slidesPerView: 1,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              width: 1350,
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          onMouseOver={() => swiperRef.current!.autoplay.start()}
          onMouseLeave={() => swiperRef.current!.autoplay.start()}
          className="mySwiper transition-all duration-75"
        >
          {data.map(
            (
              item: {
                title:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                description:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                type:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                images: any[];
                price:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                location: {
                  city:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                };
                id: any;
              },
              index: React.Key | null | undefined
            ) => {
              return (
                <SwiperSlide key={index} className="cursor-pointer">
                  <BentoGridItem
                    className="carousel-item w-[300px] h-[400px] rounded-md"
                    title={
                      <p className="whitespace-nowrap w-full text-ellipsis overflow-hidden">
                        {item.title}
                      </p>
                    }
                    description={<p className="">{item.description}</p>}
                    // header={<p className="">{item.type}</p>}
                    icon={<></>}
                    image={item.images[0] ?? ''}
                    price={<p className="">{item.price}</p>}
                    location={<p className="">{item.location.city}</p>}
                    onClick={() => {
                      router.push(`/property?id=${item.id}`);
                    }}
                  ></BentoGridItem>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
        <ButtonGroup />
        <div className="w-full flex">
          <Link
            href="/properties"
            className="text-white ml-auto mr-[5%] hover:underline"
          >
            See All Listings
          </Link>
        </div>
      </div>
    );
  if (data.length > 0)
    return (
      <div className="relative flex flex-col justify-center items-center z-[2] h-screen md:h-[80vh] bg-darkButNotBlack">
        <div className="bg-gradient-to-t from-[#13131a] from-[80%] absolute -top-20 left-0 right-0 bottom-[50%] z-1"></div>
        <h1 className="text-white titillium text-[30px] mb-10">
          View Listings
        </h1>
        <Swiper
          mousewheel={true}
          autoplay={{
            delay: 3000,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Mousewheel, Autoplay, Navigation]}
          breakpoints={{
            200: {
              width: 300,
              slidesPerView: 1,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              width: 1350,
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          onMouseOver={() => swiperRef.current!.autoplay.start()}
          onMouseLeave={() => swiperRef.current!.autoplay.start()}
          className="mySwiper transition-all duration-75"
        >
          {data.map(
            (
              item: {
                title:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                description:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                type:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                image: unknown;
                price:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                location: {
                  city:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                };
                id: any;
              },
              index: React.Key | null | undefined
            ) => {
              return (
                <SwiperSlide key={index} className="cursor-pointer">
                  <BentoGridItem
                    className="carousel-item w-[300px] h-[400px] rounded-md"
                    title={
                      <p className="whitespace-nowrap w-full text-ellipsis overflow-hidden">
                        {item.title}
                      </p>
                    }
                    description={<p className="">{item.description}</p>}
                    // header={<p className="">{item.type}</p>}
                    icon={<></>}
                    image={item.image}
                    price={<p className="">{item.price}</p>}
                    location={<p className="">{item.location.city}</p>}
                    onClick={() => {
                      router.push(`/property?id=${item.id}`);
                    }}
                  ></BentoGridItem>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
        <ButtonGroup />
        <div className="w-full flex">
          <Link
            href="/properties"
            className="text-white ml-auto mr-[5%] hover:underline"
          >
            See All Listings
          </Link>
        </div>
      </div>
    );
};
