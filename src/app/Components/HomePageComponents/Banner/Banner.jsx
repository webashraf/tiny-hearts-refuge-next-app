import React from 'react';
'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

import { Button } from 'flowbite-react';
import { FaDonate } from 'react-icons/fa';
// import img1 from '@/src/app/Assets/child-image/child1.webp'
import img1 from '@/app/Assets/child-image/child1.jpg';
const Banner = () => {
    return (
        <div>
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
                <Fade fraction className='font- uppercase font-normal'>
                  Donate Now
                </Fade>
              </Button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Banner;