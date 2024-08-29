'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
const testimonials = [
  {
    name: 'zühtü aşık',
    para: 'It was best move-in experience that I have ever with support of Dynasty Real Estate thanks especially to Sachin. I have moved couple of countries and Sachin provide excellent service with very professional approach not only during rent but also some other registration process. Your service and help is really appreciated!',
  },
  {
    name: 'ghazal saad',
    para: 'I will like to endorse Sachin, I meet him in TSC over a property open day and was looking for an agent who can help me with finding a right tenant, not only he managed to close the deal with in a week but the way he managed the process seamlessly end to end was outstanding. His wealth of knowledge helped both the parties in this transition and for sure he knows what it takes. Kudos Sachin and look forward for more collaboration and partnership in future and thanks once again for your support. You are a star!',
  },
  {
    name: 'Shukhrat Kholmatov',
    para: 'I would like to share my impression about Sunny, an employee of the Dynasty Real Estate. He is very responsible, erudite and subtle in details. He helped to purchase real estate at the best price, accompanying to the end of the transaction. I recommend it to anyone who wants to receive a service in the highest quality.',
  },
  {
    name: 'Unknown',
    para: 'I cannot speak highly enough of my experience with Sameer. Throughout the process, he was incredibly responsive & proactive. He promptly answered all my questions, negotiated terms with the landlord on my behalf, and ensured that the entire process went smoothly from start to finish.',
  },
  {
    name: 'Mohamed Esmail',
    para: 'Dealt with Alisha She was very quick and professional Selling my property was very easy as she took care of everything for me.',
  },
  {
    name: '',
    para: 'I really liked working with Inga. She helped in renting our property. She has high morals and is a professional. I would wish her all the success.',
  },
];

export const Testimonials = () => {
  return (
    <div className="optima h-[70vh] bg-[#13131a]- flex flex-col items-center justify-center">
      <div className="flex items-center justify-center w-[100%] md:w-[40%]">
        <Swiper
          mousewheel={true}
          // autoplay={{
          //   delay: 1800,
          // }}
          // modules={[Mousewheel, Autoplay]}
          className="mySwiper transition-all duration-75"
        >
          {testimonials.map((item, index) => {
            return (
              <SwiperSlide key={index} className="cursor-pointer !w-[100%] p-5">
                <div className="">
                  <p className="md:text-[16px] text-[13px]">{item.para}</p>
                  <div className="my-5">
                    <p className="md:text-[16px] text-[13px]">- {item.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
