import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='w-[466px] min-h-[755px] overflow-y-auto border border-blue-500 rounded-[16px] p-6'>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout; 