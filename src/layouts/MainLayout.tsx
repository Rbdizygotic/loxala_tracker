import React from 'react';
import Navigation from '@/components/Navigation';
import blur from '@/assets/blur.svg';
import gridbg from '@/assets/grid-bg.svg';


interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='relative w-[446px] min-h-[755px] bg-[#1D1B1D] overflow-y-auto p-6 rounded-[24px]'>
        <img src={blur} alt="blur background" className="absolute top-0 left-0 w-full h-auto" />
        <img src={gridbg} alt="grid background" className="absolute top-0 left-0 w-full h-auto z-[1] pointer-events-none" />
        <Navigation />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout; 