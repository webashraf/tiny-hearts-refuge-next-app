'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";

import { Button } from 'flowbite-react';
import { FaDonate } from 'react-icons/fa';
import img1 from '@/app/Assets/schools/school1.jpg'
import img2 from '@/app/Assets/schools/school2.webp'
import img3 from '@/app/Assets/schools/school3.webp'
import img from '@/app/Assets/schools/school.jpg'
import SectionHeding from '../../Shared/SectionHeding/SectionHeding';
const CarouselSlide = () => {
  return (
    <section>
      <SectionHeding
        title={"Our school for"}
        hTitle={"Tiny Heart's"}
        description={"Lorem ipsum hdolor sit amet consectetur adipisicing elit."}
      />
      <Carousel
        className="h-[80vh] relative w-full"
      >

        <div className=''>
          <Image
            className='w-full'
            alt="..."
            src={img}

          />
          <div className='h-full w-full bg-[#1f695b98] my-gb1 absolute top-0 right-0 flex items-center'>

          </div>
          <div className='h-full w-[700px] absolute top-0 left-0  flex items-center '>
          </div>
        </div>
        <div className=''>
          <Image
            className='w-full'
            alt="..."
            src={img1}

          />
          <div className='h-full w-full bg-[#1f695b98] my-gb1 absolute top-0 right-0 flex items-center'>

          </div>
          <div className='h-full w-[700px] absolute top-0 left-0  flex items-center '>
          </div>
        </div>
        <div className=''>
          <Image
            className='w-full'
            alt="..."
            src={img2}

          />
          <div className='h-full w-full bg-[#1f695b98] my-gb1 absolute top-0 right-0 flex items-center'>

          </div>
          <div className='h-full w-[700px] absolute top-0 left-0  flex items-center '>
          </div>
        </div>
        <div className=''>
          <Image
            className='w-full'
            alt="..."
            src={img3}

          />
          <div className='h-full w-full bg-[#1f695b98] my-gb1 absolute top-0 right-0 flex items-center'>

          </div>
          <div className='h-full w-[700px] absolute top-0 left-0  flex items-center '>
          </div>
        </div>


      </Carousel>
    </section>
  );
};

export default CarouselSlide;