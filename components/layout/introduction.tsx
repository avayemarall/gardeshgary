import React from 'react';
interface IntroductionProps {}

const Introduction: React.FC<IntroductionProps> = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20 w-full h-auto items-center md:items-center">
      <h1 className="text-2xl font-bold text-dark-blue ">معرفی آموزشگاه</h1>
      <div className='flex flex-col md:flex-row gap-6 items-center md:justify-around md:gap-0'>
        <ul className='flex flex-col list-disc gap-4 w-full justify-baseline items-center md:items-start pr-10
        md:pr-0 md:gap-13 md:w-fit
        '>
            <li className='flex flex-col gap-2 max-w-[85%]'>
                <h1 className='font-bold text-dark-blue text-xl'>1- دوره های حضوری:</h1>
                <span className='text-dark-gray'>دوره های حضوری به صورت حضوری در ساعات مشخص از طریق سایت ثبت نام کنید و در زمان مورد نظر حضور داشته باشید.</span>
            </li>
            <li className='flex flex-col gap-2 max-w-[85%]'>
                <h1 className='font-bold text-dark-blue text-xl'>2- دوره های آنلاین:</h1>
                <span className='text-dark-gray'>دوره های آنلاین به صورت آنلاین از طریق سایت ثبت نام کنید و در زمان مورد نظر حضور داشته باشید.</span>
            </li>
        </ul>
        <video src="/vid/vid1.mp4" controls 
        className='w-[80%] h-auto object-cover rounded-xl shadow-lg shadow-mid-gray
        md:self-e md:w-[40%]
        ' autoPlay muted loop playsInline/>
      </div>
        {/* <myDivider className='w-[80%]' /> */}
    </div>
  );
};

export default Introduction;