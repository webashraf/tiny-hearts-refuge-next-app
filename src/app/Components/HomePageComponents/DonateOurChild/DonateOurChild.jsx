'use client';

import { Button, Card, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

import img8 from '@/app/Assets/child-image2/donate1.webp';
import Image from 'next/image';
import { FaDonate } from "react-icons/fa";
import SectionHeding from '../../Shared/SectionHeding/SectionHeding';

const DonateOurChild = () => {
    return (
        <section>
            <SectionHeding
                title={"Donate our"}
                hTitle={"Tiny Heart's"}
                description={"Lorem ipsum hdolor sit amet consectetur adipisicing elit."}
            />
            <div className='flex gap-6 items-center relative'>
                <div className='w-1/2'>
                    <div className='w-[600px] rounded-lg overflow-hidden'>
                        <Image src={img8} alt='donate-img' className=' h-[500px] w-[500px] object-cover rounded-lg' placeholder='blur' width={600} height={400} />
                    </div>
                </div>
                <div className='w-1/2 px-10'>
                    <Card className='relative'>
                        <div className='py-8 w-[80%] mx-auto text-center text-white bg-[#0e7490] absolute -top-16 rounded-xl left-0 right-0'>
                            <h2 className='text-4xl font-bold uppercase'>Send A Mail Us</h2>
                        </div>
                        <form className="flex flex-col gap-4 mt-10">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email1"
                                        value="Your email"
                                    />
                                </div>
                                <TextInput
                                    id="email1"
                                    placeholder="name@email.com"
                                    required
                                    type="email"
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="comment"
                                        value="Your Message"
                                    />
                                </div>
                                <Textarea
                                    id="comment"
                                    className='border-[#2ec091]'
                                    placeholder="Leave a message..."
                                    required
                                    rows={4}
                                />
                            </div>
                            {/* <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">
                                    Remember me
                                </Label>
                            </div> */}
                            <Button type="submit">
                                Submit
                            </Button>
                        </form>
                    </Card>
                </div>
                <div className=' bg-white shadow-xl p-10 absolute left-44 bottom-20 rounded-lg flex gap-10 items-center'>
                    <div>
                        <h4>Mobile Bank: +0091 45 645 654 874</h4>
                        <h4>Bank ACC: 4628 5412 6541 8456</h4>
                        <h4>Live Donate: Seria, Sudan, Africa.</h4>
                    </div>
                    <div className='border-l-4 border-d border-[#2ec091] pl-10'>
                        <FaDonate className="text-5xl text-[#2ec091]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonateOurChild;