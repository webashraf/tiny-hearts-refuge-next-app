'use client';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import SectionHeding from '../../Shared/SectionHeding/SectionHeding';

import motherTeresa from '@/app/Assets/donars/mother-teresa-9504160-1-402.jpg';
import tashrif from '@/app/Assets/donars/tashrif.jpg';
import milton from '@/app/Assets/donars/milton.jpg';
import faraz from '@/app/Assets/donars/farazkarim.jpg';

const WhoDonateUs = () => {
    return (
        <section>
            <SectionHeding
                title={"Who donate our"}
                hTitle={"Tiny Heart's"}
                description={"Lorem ipsum hdolor sit amet consectetur adipisicing elit."}
            />
            <div className='bg-[url("https://images.pexels.com/photos/271168/pexels-photo-271168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-cover bg-center h-[70vh]'>

                <Carousel className='h-full bg-[#1010108f]'>

                    <div className="flex h-full items-center justify-center bg-ay0 dark:bg-gray-700 dark:text-white text-white ">
                        <div className='w-[600px] mx-auto text-center'>
                            <div className='w-[100px] h-[100px] rounded-full mx-auto overflow-hidden mb-3'>
                                <Image src={motherTeresa} alt="slide img" />
                            </div>
                            <div className='space-y-2 bg-[#2ec09271] p-5 shadow-2xl rounded-lg'>
                                <h3 className='text-2xl font-bold uppercase'>Mother Teresa</h3>
                                <h6 className='text-[#c3c3c3] tracking-wider text-sm font-normal'>2016 - 2m$</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur rerum consequuntur nisi voluptas dolores eum, et repellat voluptatum corrupti sequi reprehenderit earum aspernatur error fugiat id!</p>
                            </div>
                        </div>
                    </div>                    
                    <div className="flex h-full items-center justify-center bg-ay0 dark:bg-gray-700 dark:text-white text-white ">
                        <div className='w-[600px] mx-auto text-center'>
                            <div className='w-[100px] h-[100px] rounded-full mx-auto overflow-hidden mb-3'>
                                <Image src={tashrif} alt="slide img" />
                            </div>
                            <div className='space-y-2 bg-[#2ec09271] p-5 shadow-2xl rounded-lg'>
                                <h3 className='text-2xl font-bold uppercase'>Tashrif Khan</h3>
                                <h6 className='text-[#c3c3c3] tracking-wider text-sm font-normal'>2020 - 2m$</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur rerum consequuntur nisi voluptas dolores eum, et repellat voluptatum corrupti sequi reprehenderit earum aspernatur error fugiat id!</p>
                            </div>
                        </div>
                    </div>                    
                    <div className="flex h-full items-center justify-center bg-ay0 dark:bg-gray-700 dark:text-white text-white ">
                        <div className='w-[600px] mx-auto text-center'>
                            <div className='w-[100px] h-[100px] rounded-full mx-auto overflow-hidden mb-3'>
                                <Image src={milton} alt="slide img" />
                            </div>
                            <div className='space-y-2 bg-[#2ec09271] p-5 shadow-2xl rounded-lg'>
                                <h3 className='text-2xl font-bold uppercase'>Milton</h3>
                                <h6 className='text-[#c3c3c3] tracking-wider text-sm font-normal'>2018 - 2m$</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur rerum consequuntur nisi voluptas dolores eum, et repellat voluptatum corrupti sequi reprehenderit earum aspernatur error fugiat id!</p>
                            </div>
                        </div>
                    </div>                    
                    <div className="flex h-full items-center justify-center bg-ay0 dark:bg-gray-700 dark:text-white text-white ">
                        <div className='w-[600px] mx-auto text-center'>
                            <div className='w-[100px] h-[100px] rounded-full mx-auto overflow-hidden mb-3'>
                                <Image src={faraz} alt="slide img" />
                            </div>
                            <div className='space-y-2 bg-[#2ec09271] p-5 shadow-2xl rounded-lg'>
                                <h3 className='text-2xl font-bold uppercase'>Faraz Karim Chowdhury</h3>
                                <h6 className='text-[#c3c3c3] tracking-wider text-sm font-normal'>2018 - 2m$</h6>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure consectetur rerum consequuntur nisi voluptas dolores eum, et repellat voluptatum corrupti sequi reprehenderit earum aspernatur error fugiat id!</p>
                            </div>
                        </div>
                    </div>


                </Carousel>
            </div>
        </section>
    );
};

export default WhoDonateUs;