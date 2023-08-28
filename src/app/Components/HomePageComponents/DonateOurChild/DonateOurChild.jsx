import SectionHeding from '../../Shared/SectionHeding/SectionHeding';
import Image from 'next/image';
import img8 from '@/app/Assets/child-image2/donate1.webp';
import { FaDonate } from "react-icons/fa";

const DonateOurChild = () => {
    return (
        <section>
            <SectionHeding
                title={"Donate our"}
                hTitle={"Tiny Heart's"}
                description={"Lorem ipsum hdolor sit amet consectetur adipisicing elit."}
            />
            <div className='flex gap-6 items-end justify-between pl-32'>
                <div className='w-[600px] rounded-lg overflow-hidden'>
                    <Image src={img8} alt='donate-img' className=' h-[500px] w-[500px] object-cover rounded-lg' placeholder='blur' width={600} height={400} />
                </div>
                <div className='w-1/2 bg-white shadow-xl p-10 relative -left-44 bottom-10 rounded-lg flex gap-10 items-center'>
                    <div>
                        <h4>Mobile Bank: +0091 45 645 654 874</h4>
                        <h4>Bank ACC: 4628 5412 6541 8456</h4>
                        <h4>Live Donate: Seria, Sudan, Africa.</h4>
                    </div>
                    <div className='border-l-4 border-d border-[#0bffb2] pl-10'>
                        <FaDonate className="text-5xl text-[#0bffb2]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonateOurChild;