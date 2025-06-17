import React from 'react';
import logo from '@/assets/logo.svg';
import DefaultAvatar from '@/assets/avatar.jpg';
import MinimumIcon from '@/assets/minimum_icon.svg';
import CloseIcon from '@/assets/close_icon.svg';


const Navigation: React.FC = () => {
  return (
    <nav className="w-full h-8 flex justify-between items-center">
      <img src={logo} alt="Logo" className="!w-[95px] !h-[46px] w-auto" />
      <div className='flex justify-center items-center'>
        <img src={DefaultAvatar} alt="Logo" className="!w-8 !h-8 mr-4 rounded-full w-auto" />
        <img src={MinimumIcon} alt="Logo" className="!w-5 !h-5 mr-3 w-auto" />
        <img src={CloseIcon} alt="Logo" className="!w-5 !h-5 w-auto" />
      </div>
    </nav>
  );
};

export default Navigation; 