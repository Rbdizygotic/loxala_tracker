import Screen1 from '@/assets/1.jpg';
import Screen2 from '@/assets/2.jpg';
import Screen3 from '@/assets/3.jpg';
import Pause from '@/assets/pause.svg';
import Square from '@/assets/square.svg';
import DefaultAvatar from '@/assets/avatar.jpg';
import CircularTimer from '@/components/UI/CircularTimer';

const ActiveState: React.FC = () => {

  return (
    <div className="w-full text-white">

      <div className='flex flex-col justify-center items-center'>

        <div className='mb-8 mt-6'>
          <CircularTimer />
        </div>

        <div className='flex justify-center items-center'>
          <button className='w-[114px] h-[28px] rounded-[4px] border border-[#4B4A4B] bg-[#292729] flex justify-center items-center'>
            <span className="flex items-center space-x-2">
              <img src={DefaultAvatar} alt="Default Avatar" className="w-auto w-4 h-4 rounded-full" />
              <span className='text-[12px]'>David Smith</span>
            </span>
          </button>
        </div>


        <h3 className='text-center my-3'>
          UI/UX Designer for Creating Immersive...
        </h3>

        <div className='flex justify-center items-center gap-2 mt-3'>
          <button className='w-[120px] h-[44px] rounded-full border border-[#4B4A4B] bg-[#292729] flex justify-center items-center'>
            <span className="flex items-center space-x-2">
              <img src={Pause} alt="Pause Icon" className="w-auto w-4 h-4" />
              <span>Pause</span>
            </span>
          </button>
          <button className='w-[120px] h-[44px] rounded-full border border-[#4B4A4B] bg-[#292729] flex justify-center items-center'>
            <span className="flex items-center space-x-2">
              <img src={Square} alt="Finish Icon" className="w-auto w-4 h-4" />
              <span>Finish</span>
            </span>
          </button>
        </div>
      </div>

      <div className="my-6 border border-t-[1px] border-[#383639]" />

      <h1 className="pb-6 font-semibold">
        Screenshots
      </h1>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-[12px] h-[103px]">
          <img src={Screen1} alt="Screen1" className="w-auto rounded-[12px]" />
        </div>
        <div className="rounded-[12px] h-[103px]">
          <img src={Screen2} alt="Screen1" className="w-auto rounded-[12px]" />
        </div>
        <div className="rounded-[12px] h-[103px]">
          <img src={Screen3} alt="Screen1" className="w-auto rounded-[12px]" />
        </div>
        <div className="rounded-[12px] h-[103px]">
          <img src={Screen1} alt="Screen1" className="w-auto rounded-[12px]" />
        </div>
      </div>


      <button className="text-[12px] w-full h-8 mt-6 bg-[#474547] rounded-full rounded-full hover:opacity-90 transition">
        View All Activities
      </button>

    </div >

  );
};

export default ActiveState; 