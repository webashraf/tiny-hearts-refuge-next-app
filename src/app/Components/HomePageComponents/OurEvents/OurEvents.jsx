'use client'
import { Button, Carousel } from "flowbite-react";
import Image from "next/image";
import SectionHeding from "./../../Shared/SectionHeding/SectionHeding";

import img from '@/app/Assets/events/sports.jpeg';
import img1 from '@/app/Assets/events/sports1.jpeg';
import img2 from '@/app/Assets/events/sports2.jpeg';
import img3 from '@/app/Assets/events/others.jpeg';
import img4 from '@/app/Assets/events/other2.jpeg';
import img5 from '@/app/Assets/events/other3.jpeg';
import img6 from '@/app/Assets/events/tour.jpeg';
import img7 from '@/app/Assets/events/tour1.jpeg';
import img8 from '@/app/Assets/events/tour2.jpeg';
import img9 from '@/app/Assets/events/tour3.jpeg';

const OurEvents = () => {
    return (
        <section>
            <SectionHeding
                title={"Our"}
                hTitle={"Annual events"}
                description={"What type's of service we provide our tiny heart's"}
            />
            <div className="grid grid-cols-3">
               
                <div className="shadow-2xl rounded-lg">
                    <div className="h-[300px] mx-5">
                        <Carousel
                            // leftControl=" "
                            // rightControl=" "
                            className="w-full"
                        >
                            <Image
                                alt="..."
                                src={img1}
                                width={400}
                                height={300}
                                placeholder="blur"
                            />
                            <Image
                                alt="..."
                                src={img}
                                width={400}
                                height={300}
                                placeholder="blur"
                            />
                            <Image
                                alt="..."
                                src={img2}
                                width={400}
                                height={300}
                                placeholder="blur"
                            />
                        </Carousel>
                    </div>
                    <div className="p-5 text-left space-y-2">
                        <h2 className="text-3xl font-serif uppercase">Sports</h2>
                        <h4 className="text-gray-500 text-sm">Event Year: 2010 - 2023</h4>
                        <p className="text-sm font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laudantium fugiat voluptates eos voluptas magnam nostrum corporis.</p>
                        <Button gradientMonochrome="success">
                            See More
                        </Button>
                    </div>
                </div>                
                <div className="shadow-2xl rounded-lg">
                    <div className="h-[300px] mx-5">
                        <Carousel
                            // leftControl=" "
                            // rightControl=" "
                            className="w-full"
                        >
                            <Image
                                alt="..."
                                src={img6}
                                width={400}
                                height={300}
                                placeholder="blur"
                            />
                            <Image
                                alt="..."
                                src={img7}
                                width={400}
                                height={300}
                                placeholder="blur"
                            />
                            <Image
                                alt="..."
                                src={img8}
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
                    </div>
                    <div className="p-5 text-left space-y-2">
                        <h2 className="text-3xl font-serif uppercase">Tour and Travel's</h2>
                        <h4 className="text-gray-500 text-sm">Event Year: 2020 - 2023</h4>
                        <p className="text-sm font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laudantium fugiat voluptates eos voluptas magnam nostrum corporis.</p>
                        <Button gradientMonochrome="success">
                            See More
                        </Button>
                    </div>
                </div>                
                <div className="shadow-2xl rounded-lg">
                    <div className="h-[300px] mx-5">
                        <Carousel
                            // leftControl=" "
                            // rightControl=" "
                            className="w-full"
                        >
                            <Image
                                alt="..."
                                src={img3}
                                width={400}
                                height={300}
                                placeholder="blur"
                            />
                            <Image
                                alt="..."
                                src={img4}
                                width={400}
                                height={300}
                                placeholder="blur"
                            />
                            <Image
                                alt="..."
                                src={img5}
                                width={400}
                                height={300}
                                placeholder="blur"
                            />
                        </Carousel>
                    </div>
                    <div className="p-5 text-left space-y-2">
                        <h2 className="text-3xl font-serif uppercase">Others Event's</h2>
                        <h4 className="text-gray-500 text-sm">Event Year: 2015 - 2019</h4>
                        <p className="text-sm font-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod laudantium fugiat voluptates eos voluptas magnam nostrum corporis.</p>
                        <Button gradientMonochrome="success">
                            See More
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurEvents;