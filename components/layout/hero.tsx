import Image from 'next/image';
import React from 'react';
import mobileHero from '@/public/img/mobile-hero.webp';
import desktopHero from '@/public/img/kish.jpg';
interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className='md:w-[80%] w-full mx-auto '>
      

      <Image src={desktopHero} alt='desktophero' width={0} height={0} sizes='100vw' 
      className='w-full md:rounded-xl md:h-150 md:shadow-2xl' />
    </div>
  );
};

export default Hero;