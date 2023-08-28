'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

import { Button } from 'flowbite-react';
import { FaDonate } from 'react-icons/fa';
import img1 from '@/app/Assets/child-image/child1.jpg';
import img2 from '@/app/Assets/child-image/child2.jpeg';
import img3 from '@/app/Assets/child-image/child3.jpeg';
import img4 from '@/app/Assets/child-image/child4.jpeg';
import img5 from '@/app/Assets/child-image/child5.jpg';
const CarouselSlide = () => {
  return (
    <>
      <Carousel
        className="h-[80vh] relative w-[1200px]"
      >
        <div className=''>
          <Image
            className='w-full'
            alt="..."
            src={img1}

          />
          <div className='h-full w-full bg-[#1f695b98] my-gb1 absolute top-0 right-0 flex items-center'>
          <div className='space-y-3 w-[700px] mx-auto flex items-center justify-center flex-col px-16 text-white font-bold'>
              <h1 className='text-7xl uppercase shadow-text'>Hello World</h1>
              <p className=' font-normal shadow-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore rerum et dolorem! Illum, autem mollitia molestiae quisquam quo assumenda. Vitae at, atque ad consectetur facilis minus nulla dolore iste!</p>
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                <Fade fraction className='font- uppercase font-normal'>
                  Donate Now
                </Fade>
              </Button>
            </div>
          </div>
          <div className='h-full w-[700px] absolute top-0 left-0  flex items-center '>
            
          </div>
        </div>



        <div className='w-[1280px]'>
          <Image
            className='w-full'
            alt="..."
            src={img2}
          />
          <div className='h-full w-[700px] bg-[#1f695b98] my-gb1 absolute top-0 -left-14 rotate-12 flex items-center'>
          </div>
          <div className='h-full w-[700px] absolute top-0 left-0  flex items-center px-16 text-white font-bold'>
            <div className='space-y-3'>
              <h1 className='text-7xl uppercase shadow-text'>Hello World</h1>
              <p className=' font-normal shadow-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore rerum et dolorem! Illum, autem mollitia molestiae quisquam quo assumenda. Vitae at, atque ad consectetur facilis minus nulla dolore iste!</p>
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                <Fade fraction className='font- uppercase font-normal'>
                  Donate Now
                </Fade>
              </Button>
            </div>
          </div>
        </div>

      </Carousel>
    </>
  );
};

export default CarouselSlide;