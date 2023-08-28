"use client";

import Image from "next/image";
import { Bounce, Fade } from "react-awesome-reveal";

import img1 from "@/app/Assets/child-image/child1.jpg";
import { Button, Carousel } from "flowbite-react";
import { FaDonate } from "react-icons/fa";

import img8 from '@/app/Assets/child-image2/Counseling .jpg';
import img14 from '@/app/Assets/child-image2/I_am_hungry.jpg';
import img18 from '@/app/Assets/child-image2/bg-child.jpg';
import img9 from '@/app/Assets/child-image2/happy.jpg';
import img11 from '@/app/Assets/child-image2/teach.jpg';
import "./Banner.css";

const Banner = () => {
  return (
    <div className="w-[1280px] h-[90vh] overflow-hidden">
      <div className=" mx-auto relative overflow-hidden w-[1280px] h-[90vh]">

        <Image className="w-full" alt="..." src={img1} />

        <div className="h-[1200px] w-[750px] bg-[#101010ba] absolute -top-32 -left-32 rotate-12 border-r-4 border-dashed border-[#00ffaad9] flex items-center"></div>

        <div className="h-[1200px] w-[765px] bg-[#101010ba] absolute -top-32 -right-32 rotate-12 border-l-4 border-dashed border-[#00ffaad9] flex items-center"></div>

        <div className="h-full w-[700px] absolute top-0 left-0  flex items-center px-10 text-white font-bold">

          <div className="space-y-3">
            <h1 className="text-6xl uppercase">Donate for Change</h1>
            <p className=" font-normal">
              Together, Let's Make a Meaningful Impact – Your Support Fuels Progress, Provides Hope, and Transforms Communities. Join Hands for a Better Tomorrow.
            </p>
            <Bounce  className="font- uppercase font-normal">
              <Button gradientMonochrome="info">
                <FaDonate className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Bounce>
          </div>


        </div>

        <div className="h-full w-[520px] absolute -bottom-20 right-0  flex items-center px-8 text-white font-bold">

          <>

            <Carousel
              leftControl=" "
              rightControl=" "
            >
              <Image
                alt="..."
                src={img8}
                width={400}
                height={300}
                placeholder="blur"
              />
              <Image
                alt="..."
                src={img11}
                width={400}
                height={300}
                placeholder="blur"
              />
              <Image
                alt="..."
                src={img14}
                width={400}
                height={300}
                placeholder="blur"
              />
              <Image
                alt="..."
                src={img18}
                width={400}
                height={300}
                placeholder="blur"
              />
              <Image
                alt="..."
                src={img9}
                width={400}
                height={300}
                placeholder="blur"
              />
            </Carousel>
          </>


        </div>
      </div>
    </div>
  );
};

export default Banner;
