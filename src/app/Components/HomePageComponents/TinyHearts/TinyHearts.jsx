import img2 from "@/app/Assets/child-image/child2.jpeg";
import img4 from "@/app/Assets/child-image/child4.jpeg";
import img5 from "@/app/Assets/child-image/child5.jpg";
import img6 from "@/app/Assets/child-image2/rose-girl.jpg";
import Image from "next/image";

import img8 from '@/app/Assets/child-image2/Counseling .jpg';
import img18 from '@/app/Assets/child-image2/bg-child.jpg';
import img13 from '@/app/Assets/child-image2/event1-416x412.jpg';
import img7 from '@/app/Assets/child-image2/feeding.jpg';
import img12 from '@/app/Assets/child-image2/safety.png';
import img11 from '@/app/Assets/child-image2/teach.jpg';
import SectionHeding from "./../../Shared/SectionHeding/SectionHeding";
const TinyHearts = () => {
  return (
    <section className="">
      <SectionHeding
        title={"Our Tiny"}
        hTitle={"Heart's"}
        description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
      />
      <div class="grid grid-cols-4 gap-3">
        <div class="space-y-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img4}
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img13}
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img18}
              alt=""
            />
          </div>
        </div>
        <div class="space-y-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img7}
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img8}
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img12}
              alt=""
            />
          </div>
        </div>
        <div class="space-y-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img7}
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img2}
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img11}
              alt=""
            />
          </div>
        </div>
        <div class="space-y-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img6}
              alt=""
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <Image
              placeholder="blur"
              width={400}
              height={300}
              class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer"
              src={img5}
              alt=""
            />
          </div>
          {/* <div classNaoverflow-hidden rounded-lgme=''>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img3} alt="" />
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default TinyHearts;
