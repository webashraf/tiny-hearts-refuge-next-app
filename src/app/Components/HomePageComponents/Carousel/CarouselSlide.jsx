'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import { BiDonateHeart } from 'react-icons/bi';
import { FaDonate } from 'react-icons/fa';
import React from 'react';
// import img1 from '@/src/app/Assets/child-image/child1.webp'
import img1 from '@/app/Assets/child-image/child1.jpg';
import img2 from '@/app/Assets/child-image/child2.jpeg';
import img3 from '@/app/Assets/child-image/child3.jpeg';
import img4 from '@/app/Assets/child-image/child4.jpeg';
import img5 from '@/app/Assets/child-image/child5.jpg';
import { Alert } from 'flowbite-react';

const CarouselSlide = () => {
  return (
    <>
      <Carousel
        className="h-[90vh] relative"
      >
        <div className='w-[1280px]'>
          <Image
            className='w-full'
            alt="..."
            src={img1}

          />
          <div className='h-full w-[700px] bg-[#1f695b98] my-gb1 absolute top-0 -left-14 rotate-12 flex items-center'>
          </div>
          <div className='h-full w-[700px] absolute top-0 left-0  flex items-center px-16 text-white font-bold'>
            <div className='space-y-3'>
              <h1 className='text-7xl uppercase'>Hello World</h1>
              <p className=' font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore rerum et dolorem! Illum, autem mollitia molestiae quisquam quo assumenda. Vitae at, atque ad consectetur facilis minus nulla dolore iste!</p>
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                <p className='font- uppercase font-normal'>
                  Donate Now
                </p>
              </Button>
            </div>
          </div>
        </div>
        {/* <div className='w-[1280px]'>
        <Image
        className='w-full'
        alt="..."
        src={img2}
      />
      </div>
      <div className='w-[1280px]'>
        <Image
        className='w-full'
        alt="..."
        src={img3}
      />
      </div>
      <div className='w-[1280px]'>
        <Image
        className='w-full'
        alt="..."
        src={img4}
      />
      </div>
      <div className='w-[1280px]'>
        <Image
        className='w-full'
        alt="..."
        src={img5}
      />
      </div> */}
      </Carousel>
    </>
  );
};

export default CarouselSlide;