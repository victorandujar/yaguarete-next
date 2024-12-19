import { FaRegRegistered } from "react-icons/fa";

const ReusableLowerFooter = (): React.ReactElement => {
  return (
    <footer className="flex justify-between items-center text-black px-10 pt-5 ">
      <span className="tracking-[5px] text-ms">FEED YOUR BODY & SOUL</span>
      <div className="flex items-center gap-2">
        <FaRegRegistered size={15} />
        <span className="font-bold text-ms"> 2024</span>
      </div>
    </footer>
  );
};

export default ReusableLowerFooter;
