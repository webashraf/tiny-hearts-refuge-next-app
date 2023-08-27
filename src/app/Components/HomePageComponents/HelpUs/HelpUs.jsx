"use client"
import img8 from '@/app/Assets/child-image2/Counseling .jpg';
import img18 from '@/app/Assets/child-image2/bg-child.jpg';
import img13 from '@/app/Assets/child-image2/event1-416x412.jpg';
import img7 from '@/app/Assets/child-image2/feeding.jpg';
import { BiDonateHeart } from 'react-icons/bi';
import { BsChevronRight } from 'react-icons/bs';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { VscBook } from 'react-icons/vsc';

import Image from 'next/image';
import { Button } from 'flowbite-react';

const HelpUs = () => {
    return (
        <section className=''>
            <div className="grid grid-cols-3 gap-6">
                <div>
                    <div className="relative rounded-sm overflow-hidden">
                        <Image
                            placeholder="blur"
                            width={400}
                            height={300}
                            className="transition-transform duration-700 hover:scale-150 cursor-pointer w-[400px] h-[300px] object-cover "
                            src={img18}
                            alt=""
                        />
                        <div className='w-full h-full bg-[#0000007b] transition-transform duration-300 ease-in-out hover:scale-110 absolute top-0 left-0 text-white bg-gradient-to-t hover:from-[#2ec091] hover:via-[#2ec09289] hover:to-[#0bffb239]  flex justify-center items-center flex-col'>

                            <AiOutlineDollarCircle className="text-5xl text-[#36ffbf]"> </AiOutlineDollarCircle>
                            <h2 className="text-2xl font-bold uppercase">Make Donation</h2>
                            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, cumque.</p>
                        </div>

                    </div>
                    <div className="relative bottom-[27px] left-0 right-0 mx-auto w-full flex justify-center z-30">
                        <Button

                            className="border bg-white text-gray-700 border-2 border-[#0abe85fd] rounded-full w-[60px] h-[60px]"
                        >
                            <BsChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
                <div space-y-3>
                    <div className="relative rounded-sm overflow-hidden">
                        <Image
                            placeholder="blur"
                            width={400}
                            height={300}
                            className="transition-transform duration-700 hover:scale-150 cursor-pointer w-[400px] h-[300px] object-cover "
                            src={img18}
                            alt=""
                        />
                        <div className='w-full h-full bg-[#0000007b] transition-transform duration-300 ease-in-out hover:scale-110 absolute top-0 left-0 text-white bg-gradient-to-t hover:from-[#2ec091] hover:via-[#2ec09289] hover:to-[#0bffb239]  flex justify-center items-center flex-col'>
                            <BiDonateHeart className="text-5xl text-[#36ffbf]"></BiDonateHeart>
                            <h2 className="text-2xl font-bold uppercase">Become A Volunteer</h2>
                            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, cumque.</p>
                        </div>

                    </div>
                    <div className="relative bottom-[27px] left-0 right-0 mx-auto w-full flex justify-center z-30">
                        <Button

                            className="border bg-white text-gray-700 border-2 border-[#0abe85fd] rounded-full w-[60px] h-[60px]"
                        >
                            <BsChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>               
                
                <div>
                    <div className="relative rounded-sm overflow-hidden">
                        <Image
                            placeholder="blur"
                            width={400}
                            height={300}
                            className="transition-transform duration-700 hover:scale-150 cursor-pointer w-[400px] h-[300px] object-cover "
                            src={img18}
                            alt=""
                        />
                        <div className='w-full h-full bg-[#0000007b] transition-transform duration-300 ease-in-out hover:scale-110 absolute top-0 left-0 text-white bg-gradient-to-t hover:from-[#2ec091] hover:via-[#2ec09289] hover:to-[#0bffb239]  flex justify-center items-center flex-col'>
                            <VscBook className="text-5xl text-[#36ffbf]"></VscBook>
                            <h2 className="text-2xl font-bold uppercase">Education For All</h2>
                            <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, cumque.</p>
                        </div>

                    </div>
                    <div className="relative bottom-[27px] left-0 right-0 mx-auto w-full flex justify-center z-30">
                        <Button

                            className="border bg-white text-gray-700 border-2 border-[#0abe85fd] rounded-full w-[60px] h-[60px]"
                        >
                            <BsChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </ section>
    );
};

export default HelpUs;