import React from 'react';
import logo from '@/assets/logo.svg';
import blur from '@/assets/blur.svg';

interface WelcomelayoutProps {
  children: React.ReactNode;
}

const Welcomelayout: React.FC<WelcomelayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='relative w-[446px] min-h-[755px] bg-[#1D1B1D] overflow-y-auto p-6 rounded-[24px]'>
        <img src={blur} alt="blur background" className="absolute top-0 left-0 w-full h-auto" />
        <div className="flex justify-center items-center">
          <img src={logo} alt="Logo" className="!w-[95px] !h-[46px] w-auto" />
        </div>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Welcomelayout; 