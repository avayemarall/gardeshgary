import Image from 'next/image';
import React from 'react';
import mobileHero from '@/public/img/mobile-hero.webp';
import desktopHero from '@/public/img/desktop-hero.webp';
interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className='w-full'>
      <Image src={mobileHero} alt='mobilehero' width={0} height={0} sizes='100vw' className='w-full md:hidden h-auto' />
      <Image src={desktopHero} alt='desktophero' width={0} height={0} sizes='100vw' className='w-full hidden md:block h-auto' />
    </div>
  );
};

export default Hero;