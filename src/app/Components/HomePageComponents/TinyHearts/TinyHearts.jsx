'use client'
import img2 from "@/app/Assets/child-image/child2.jpeg";
import img4 from "@/app/Assets/child-image/child4.jpeg";
import img5 from "@/app/Assets/child-image/child5.jpg";
import img6 from "@/app/Assets/child-image2/rose-girl.jpg";
import Image from "next/image";

import img8 from '@/app/Assets/child-image2/Counseling .jpg';
import img17 from '@/app/Assets/child-image2/I_am_hungry.jpg';
import img18 from '@/app/Assets/child-image2/bg-child.jpg';
import img13 from '@/app/Assets/child-image2/event1-416x412.jpg';
import img16 from '@/app/Assets/child-image2/food.jpeg';
import img12 from '@/app/Assets/child-image2/safety.png';
import img11 from '@/app/Assets/child-image2/teach.jpg';
import { Bounce, Fade } from "react-awesome-reveal";
import SectionHeding from "./../../Shared/SectionHeding/SectionHeding";
const TinyHearts = () => {
  return (
    <section className="">
      <SectionHeding
        title={"Our Tiny"}
        hTitle={"Heart's"}
        description={"Lorem ipsum hdolor sit amet consectetur adipisicing elit."}
      />
      <div class="grid grid-cols-4 gap-3">
        <div class="space-y-4">
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img4}
              alt=""
            />
          </Fade>
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img13}
              alt=""
            />
          </Fade>
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img18}
              alt=""
            />
          </Fade>
        </div>
        <div class="space-y-4">
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img17}
              alt=""
            />
          </Fade>
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img8}
              alt=""
            />
          </Fade>
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img12}
              alt=""
            />
          </Fade>
        </div>
        <div class="space-y-4">
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img16}
              alt=""
            />
          </Fade>
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img2}
              alt=""
            />
          </Fade>
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img11}
              alt=""
            />
          </Fade>
        </div>
        <div class="space-y-4">
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img6}
              alt=""
            />
          </Fade>
          <Fade duration={2000} direction="up" className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img5}
              alt=""
            />
          </Fade>
          {/* <div classNaoverflow-hidden rounded-lgme=''>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img3} alt="" />
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default TinyHearts;
