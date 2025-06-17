import React from 'react';
import Navigation from '@/components/Navigation';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='relative w-[446px] min-h-[755px] bg-[#1D1B1D] overflow-y-auto p-6 rounded-[24px]'>
        <Navigation />
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout; 