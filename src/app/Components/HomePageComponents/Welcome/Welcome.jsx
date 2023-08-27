import Image from 'next/image';
import img from '@/app/Assets/child-image2/welcome.jpg';

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
            <div className="w-1/2 shadow-2xl p-5 relative -left-[126px] bg-white rounded-lg shadow-[#00ff43d9">
                <div className="welcome-section">
                    <p className='uppercase text-[#00ff44] font-bold underline'>About Us</p>
                    <h2 className='text-5xl font-serif'>Welcome To Our Donation
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet iste quod libero! Magnam laborum quaerat, et perferendis alias placeat consectetur fugit possimus. </p>
                    <ul className='ml-5'>
                        <li>List</li>
                        <li>List</li>
                        <li>List</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Welcome;