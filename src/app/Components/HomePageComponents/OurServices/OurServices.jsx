"use client";
import React from "react";
import SectionHeding from "./../../Shared/SectionHeding/SectionHeding";
import { Button, Card } from "flowbite-react";
import Image from "next/image";
// import img4 from "@/app/Assets/child-image/child4.jpeg";
import "./OurServices.css";
import img from '@/app/Assets/child-image2/feeding.jpg';
import img5 from '@/app/Assets/child-image2/Counseling .jpg';
import img3 from '@/app/Assets/child-image2/doctor_service.jpg';
import img6 from '@/app/Assets/child-image2/training.jpg';
import img2 from '@/app/Assets/child-image2/teach.jpg';
import img4 from '@/app/Assets/child-image2/safety.png';
// import img from '@/app/Assets/child-image2/';

const OurServices = () => {
  return (
    <section>
      <SectionHeding
        title={"What"}
        hTitle={"we do?"}
        description={"What type's of service we provide our tiny heart's"}
      />
      <div className="grid grid-cols-3 gap-4">
        <div className=" rounded my-card shadow-lg">
          <div className="relative img-div rounded-t-lg overflow-hidden ">
            <Image
              className="hover-zoom"
              width={400}
              height={300}
              placeholder="blur"
              src={img}
              alt="..."
            />
            {/* <div className="absolute top-2 right-0 img-btn">
              <Button gradientMonochrome="info" className="rounded-none">
                Feeding
              </Button>
            </div> */}
          </div>

          <div className="p-3 space-y-3 card-description-hover-top relative -top-10 bg-[#ffffffe6] rounded-xl shadow-2xl w-[90%] mx-auto">
            <Button
              gradientDuoTone="greenToBlue"
              className="rounded-none"
              size="xs"
            >
              Feeding
            </Button>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
              3 Times feeding healthy food
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
              Daily triple servings of nutritious meals, fostering health and
              growth for street children.
            </p>
            <div className="service-ul">
              <ul className="text-xs styled-ul">
                <li>Three balanced meals daily for healthy growth.</li>
                <li>Nutrient-rich food promoting well-being.</li>
                <li>Nutritional education empowering informed choices.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" rounded my-card shadow-lg">
          <div className="relative img-div rounded-t-lg overflow-hidden ">
            <Image
              className="hover-zoom"
              width={400}
              height={300}
              placeholder="blur"
              src={img2}
              alt="..."
            />
            {/* <div className="absolute top-2 right-0 img-btn">
              <Button gradientMonochrome="info" className="rounded-none">
                Feeding
              </Button>
            </div> */}
          </div>

          <div className="p-3 space-y-3 card-description-hover-top relative -top-10 bg-[#ffffffe6] rounded-xl shadow-2xl w-[90%] mx-auto">
            <Button
              gradientDuoTone="greenToBlue"
              className="rounded-none"
              size="xs"
            >
              Education
            </Button>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
              Provide educational all support
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
              Daily triple servings of nutritious meals, fostering health and
              growth for street children.
            </p>
            <div className="service-ul">
              <ul className="text-xs styled-ul">
                <li>Providing access to formal and informal education.</li>
                <li>Offering tutoring and study materials.</li>
                <li>Organizing workshops and skill development programs.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" rounded my-card shadow-lg">
          <div className="relative img-div rounded-t-lg overflow-hidden ">
            <Image
              className="hover-zoom"
              width={400}
              height={300}
              placeholder="blur"
              src={img3}
              alt="..."
            />
            {/* <div className="absolute top-2 right-0 img-btn">
              <Button gradientMonochrome="info" className="rounded-none">
                Feeding
              </Button>
            </div> */}
          </div>

          <div className="p-3 space-y-3 card-description-hover-top relative -top-10 bg-[#ffffffe6] rounded-xl shadow-2xl w-[90%] mx-auto">
            <Button
              gradientDuoTone="greenToBlue"
              className="rounded-none"
              size="xs"
            >
              Health
            </Button>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
              Provide 24/7 health care
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
              Caring for their well-being, one check-up at a time.
            </p>
            <div className="service-ul">
              <ul className="text-xs styled-ul">
                <li>Basic medical check-ups.</li>
                <li>Vaccinations and health awareness.</li>
                <li>Access to healthcare professionals.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" rounded my-card shadow-lg">
          <div className="relative img-div rounded-t-lg overflow-hidden ">
            <Image
              className="hover-zoom"
              width={400}
              height={300}
              placeholder="blur"
              src={img4}
              alt="..."
            />
            {/* <div className="absolute top-2 right-0 img-btn">
              <Button gradientMonochrome="info" className="rounded-none">
                Feeding
              </Button>
            </div> */}
          </div>

          <div className="p-3 space-y-3 card-description-hover-top relative -top-10 bg-[#ffffffe6] rounded-xl shadow-2xl w-[90%] mx-auto">
            <Button
              gradientDuoTone="greenToBlue"
              className="rounded-none"
              size="xs"
            >
              Safety
            </Button>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
              Shelter and Safety
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
              Safe havens in challenging times.
            </p>
            <div className="service-ul">
              <ul className="text-xs styled-ul">
                <li>Basic medical check-ups.</li>
                <li>Vaccinations and health awareness.</li>
                <li>Access to healthcare professionals.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" rounded my-card shadow-lg">
          <div className="relative img-div rounded-t-lg overflow-hidden ">
            <Image
              className="hover-zoom"
              width={400}
              height={300}
              placeholder="blur"
              src={img5}
              alt="..."
            />
            {/* <div className="absolute top-2 right-0 img-btn">
              <Button gradientMonochrome="info" className="rounded-none">
                Feeding
              </Button>
            </div> */}
          </div>

          <div className="p-3 space-y-3 card-description-hover-top relative -top-10 bg-[#ffffffe6] rounded-xl shadow-2xl w-[90%] mx-auto">
            <Button
              gradientDuoTone="greenToBlue"
              className="rounded-none"
              size="xs"
            >
              Counseling
            </Button>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
              Counseling and Emotional Support
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
              Listening, healing, and offering hope for brighter futures.
            </p>
            <div className="service-ul">
              <ul className="text-xs styled-ul">
                <li>Individual and group therapy sessions.</li>
                <li>Providing a safe space to share experiences.</li>
                <li>Mental health support for trauma and stress.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" rounded my-card shadow-lg">
          <div className="relative img-div rounded-t-lg overflow-hidden ">
            <Image
              className="hover-zoom"
              width={400}
              height={300}
              placeholder="blur"
              src={img6}
              alt="..."
            />
            {/* <div className="absolute top-2 right-0 img-btn">
              <Button gradientMonochrome="info" className="rounded-none">
                Feeding
              </Button>
            </div> */}
          </div>

          <div className="p-3 space-y-3 card-description-hover-top relative -top-10 bg-[#ffffffe6] rounded-xl shadow-2xl w-[90%] mx-auto">
            <Button
              gradientDuoTone="greenToBlue"
              className="rounded-none"
              size="xs"
            >
              Training
            </Button>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
              Provide Vocational Training
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
              Equipping with skills for self-reliance and growth.
            </p>
            <div className="service-ul">
              <ul className="text-xs styled-ul">
                <li>Teaching practical skills (e.g., carpentry, sewing).</li>
                <li>Job readiness workshops.</li>
                <li>Apprenticeship opportunities.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
