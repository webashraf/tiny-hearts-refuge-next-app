"use client"
import React from 'react';
import SectionHeding from './../../Shared/SectionHeding/SectionHeding';
import { Button, Card } from 'flowbite-react';
import Image from 'next/image';
import img4 from '@/app/Assets/child-image/child4.jpeg';
import "./OurServices.css"

const OurServices = () => {
    return (
        <section>
            <SectionHeding title={"What"} hTitle={"we do?"} description={"What type's of service we provide our tiny heart's"} />
            <div className="grid grid-cols-3 gap-4">


                <div className="border rounded my-card">

                    <div className="relative border broder-8 border-red-500 img-div rounded-t-lg overflow-hidden">
                        <Image width={500} height={500} src={img4} alt="..." />
                        <div className="absolute bottom-3 left-3 img-btn">
                        <Button gradientDuoTone="greenToBlue">
                            Green to Blue
                        </Button>
                        </div>
                    </div>

                    <div className='p-3 space-y-3 card-description'>
                        {/* <Button gradientDuoTone="greenToBlue">
                            Green to Blue
                        </Button> */}
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>

                    </div>
                    <div className='p-3 space-y-3 card-description-hover-top'>
                        <Button gradientDuoTone="greenToBlue">
                            Green to Blue
                        </Button>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>

                    </div>
                </div>



                <div className="border">
                    <div>
                        <Image width={500} height={500} src={img4} alt="..." />
                    </div>
                    <div><h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>

                    </div>
                </div>
                <div className="border">
                    <div>
                        <Image width={500} height={500} src={img4} alt="..." />
                    </div>
                    <div><h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurServices;