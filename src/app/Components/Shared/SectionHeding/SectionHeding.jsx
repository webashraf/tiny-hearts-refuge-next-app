import React from 'react';

const SectionHeding = ({title, hTitle, description}) => {
    return (
        <div className='text-center w-[600px] mx-auto space-y-3 pb-20'>
            {/* <h4 className='uppercase text-[#00ff4491] font-bold underline'>{title}</h4>  */}
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white capitalize ">{title}&nbsp;<span class="underline underline-offset-3 decoration-8 decoration-[#00ff8c] dark:decoration-blue-600">{hTitle}</span></h1>
            {/* <h1 className='text-7xl font-serif'>{hTitle}</h1> */}
            <p className='font-normal text-gray-500'>{description}</p>
        </div>
    );
};

export default SectionHeding;