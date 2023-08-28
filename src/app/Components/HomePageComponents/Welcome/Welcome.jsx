'use client'
import Image from 'next/image';
import img from '@/app/Assets/child-image2/welcome.jpg';
import { Fade, Flip, Zoom } from 'react-awesome-reveal';

const Welcome = () => {
    return (
        <div className='flex py-20 pl-5 items-center'>
            <div className="w-1\2">
                <Image
                src={img}
                alt="welcome img"
                width={600}
                height={600}
                placeholder='blur'
                />
            </div>
            <Fade  className="w-1/2 shadow-2xl p-5 relative -left-[126px] bg-white rounded-lg shadow-[#00ffbf5a]">
                <div className="welcome-section space-y-3">
                    <p className='uppercase text-[#00ffbf] font-bold underline'>About Us</p>


                    <h1 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white capitalize ">Welcome To Our&nbsp;<span class="underline underline-offset-3 decoration-8 decoration-[#00ff8c] dark:decoration-blue-600">Donation</span></h1>

                    <p className=''>Experience the profound impact of your generosity. Welcome to our platform, where every donation drives meaningful transformation for street children.</p>
                    <ul className='ml-5 styled-ul'>
                        <li>Be a lifeline for children in need.</li>
                        <li>Spark positive change with your support.
</li>
                        <li>Join hands in a compassionate community.
</li>
                    </ul>
                </div>
            </Fade>
        </div>
    );
};

export default Welcome;