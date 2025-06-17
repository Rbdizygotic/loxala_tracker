import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import googleIcon from '@/assets/google.svg';
import appleIcon from '@/assets/apple.svg';
import HomeBG from '@/assets/home_bg.jpg';

const Home: React.FC = () => {

  const [show, setShow] = useState(false);

  return (
    <div className="w-full text-white">
      <h1 className="self-stretch text-center text-[32px] font-mulish font-semibold leading-normal pt-4 pb-1">
        Loxala Time Tracker
      </h1>
      <p className="self-stretch text-center text-[16px] font-open-sans font-normal leading-normal px-16">
        Enter your details to start tracking your working hours
      </p>
      <div className='w-full h-[162px] rounded-[12px] mt-8 mb-6'>
        <img src={HomeBG} alt="Logo" className="w-full h-[162px] w-auto rounded-[20px]" />
      </div>
      <div className='grid grid-cols-2 gap-3'>
        <div className='flex justify-start items-center gap-2 bg-[#292729] col-span-1 rounded-full px-4 py-3 text-center'>
          <img src={googleIcon} alt="Logo" className="w-4 h-4 w-auto" />
          <p>Login with Google</p>
        </div>
        <div className='flex justify-start items-center gap-2 bg-[#292729] col-span-1 rounded-full px-4 py-3 text-center'>
          <img src={appleIcon} alt="Logo" className="w-4 h-4 w-auto" />
          <p>Login with Apple</p>
        </div>
      </div>
      <div className="flex items-center text-[#2F2D2F] text-sm py-3">
        <div className="flex-grow border-t border-[#2F2D2F]"></div>
        <span className="px-3">or</span>
        <div className="flex-grow border-t border-[#2F2D2F]"></div>
      </div>
      <div className='pt-5'>
        <label className="self-stretch text-white text-[14px] font-open-sans font-normal leading-normal">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Provide a valid email address"
          className="w-full px-4 py-2 mt-2 bg-[#1E1E1E] text-gray-300 placeholder-gray-500 border border-[#2E2E2E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        />
      </div>
      <div className='pt-4'>
        <label className="self-stretch text-white text-[14px] font-open-sans font-normal leading-normal">
          Password
        </label>
        <div className="w-full flex items-center mt-2 border border-[#2E2E2E] bg-[#1E1E1E] text-gray-300 rounded-md px-4 py-2">
          <input
            type={show ? 'text' : 'password'}
            placeholder="Input your password"
            className="bg-transparent outline-none w-full placeholder-gray-500 text-sm"
          />
          <button type="button" onClick={() => setShow(!show)} className="ml-2 text-gray-400 hover:text-gray-200">
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
      <button className="w-full max-w-[646px] mt-8 text-white text-lg font-semibold py-3 rounded-full bg-gradient-to-b from-[#D87CFD] to-[#4B30F0] shadow-inner shadow-[#ffffff33] hover:opacity-90 transition">
        Login
      </button>


    </div>
  );
};

export default Home; 