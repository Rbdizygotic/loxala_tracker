import ClockCountdown from '@/assets/ClockCountdown.svg';
import Hourglass from '@/assets/Hourglass.svg';

const State: React.FC = () => {

  return (
    <div className="w-full text-white">
      <div className='pt-5'>
        <label className="self-stretch text-white text-[14px] font-open-sans font-normal leading-normal">
          Project
        </label>
        <input
          type="email"
          placeholder="UI/UX Designer for Creating Immersive and Intuitive..."
          className="w-full px-4 py-2 mt-2 bg-[#1E1E1E] text-gray-300 placeholder-gray-500 border border-[#2E2E2E] rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
        />
      </div>

      <button className="w-full max-w-[646px] mt-8 mb-2 text-white text-lg font-semibold py-3 rounded-full bg-gradient-to-b from-[#D87CFD] to-[#4B30F0] shadow-inner shadow-[#ffffff33] hover:opacity-90 transition">
        Start Working
      </button>

      <div className="my-8 border border-t-[1px] border-[#383639]" />

      <h1 className="pb-6 font-semibold">
        Billing Cycle Report
      </h1>

      <div className="rounded-[12px] bg-[#292729] px-4 py-6">

        <div className="flex justify-start items-center mb-[14px]">
          <img src={ClockCountdown} alt="ClockCountdown" className="w-4 h-4 w-auto mr-2" />
          <h4>
            Billing Cycle Period
            <span className="text-[#7C7C7C] pl-1">
              Oct 8, 2024 – Oct 14, 2024
            </span>
          </h4>
        </div>
        <div className="flex justify-start items-center">
          <img src={Hourglass} alt="Hourglass" className="w-4 h-4 w-auto mr-2" />

          <h4>
            Hourly Rate
            <span className="text-[#7C7C7C] pl-1">
              $50/hour
            </span>
          </h4>
        </div>


        <div className="my-6 border border-t-[1px] border-[#383639]">

        </div>


        <div className="bg-[#343234] rounded-[12px] p-3 mb-2">
          <h4 className="pb-3">Total Hours for the Cycle</h4>
          <h4>41 hours</h4>
        </div>
        <div className="bg-[#343234] rounded-[12px] p-3 mb-2">
          <h4 className="pb-3">Total Amount Due</h4>
          <h4>$2,050</h4>
        </div>
        <div className="bg-[#343234] rounded-[12px] p-3">
          <h4 className="pb-3">Next Billing Cycle</h4>
          <h4>Oct 15, 2024 – Oct 21, 2024</h4>
        </div>
      </div>

    </div>

  );
};

export default State; 