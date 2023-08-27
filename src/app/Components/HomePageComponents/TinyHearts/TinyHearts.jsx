import img1 from '@/app/Assets/child-image/child1.jpg';
import img2 from '@/app/Assets/child-image/child2.jpeg';
import img3 from '@/app/Assets/child-image/child3.jpeg';
import img4 from '@/app/Assets/child-image/child4.jpeg';
import img5 from '@/app/Assets/child-image/child5.jpg';
import img6 from '@/app/Assets/child-image2/rose-girl.jpg';
import Image from 'next/image';
import SectionHeding from './../../Shared/SectionHeding/SectionHeding';
const TinyHearts = () => {
    return (
        <section className=''>

            <SectionHeding title={"Our Tiny"} hTitle={"Heart's"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
            <div class="grid grid-cols-4 gap-3">
                <div class="space-y-4">
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img4} alt="" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img1} alt="" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img2} alt="" />
                    </div>
                </div>
                <div class="space-y-4">
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img1} alt="" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img4} alt="" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img5} alt="" />
                    </div>
                </div>
                <div class="space-y-4">
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img5} alt="" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img2} alt="" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img1} alt="" />
                    </div>
                </div>
                <div class="space-y-4">
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img6} alt="" />
                    </div>
                    <div className='overflow-hidden rounded-lg'>
                        <Image placeholder='blur' width={400} height={300} class="h-auto w-full rounded-lg transition-transform duration-700 hover:scale-150 cursor-pointer" src={img5} alt="" />
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