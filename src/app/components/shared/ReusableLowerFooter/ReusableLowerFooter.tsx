import { FaRegRegistered } from "react-icons/fa";

const ReusableLowerFooter = (): React.ReactElement => {
  return (
    <footer className="flex justify-between items-center text-black px-10 mobile:px-5 pt-5 mobile:border-t mobile:border-black">
      <span className="tracking-[5px] text-ms mobile:text-xs">
        FEED YOUR BODY & SOUL
      </span>
      <div className="flex items-center gap-2">
        <FaRegRegistered className="text-m mobile:text-s" />
        <span className="font-bold text-ms mobile:text-xs"> 2024</span>
      </div>
    </footer>
  );
};

export default ReusableLowerFooter;
