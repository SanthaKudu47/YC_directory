import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";

export default function Card() {
  return (
    <div className="bg-black relative  min-w-[320px] h-[471px] z-0 rounded-xl">
      <div className="absolute  bg-white rounded-xl z-10 w-full h-full -top-1 -left-1 border-4 border-black border-solid px-3">
        <div className="flex flex-row justify-between w-full items-center py-5">
          <div className="text-black bg-p3 p-2 rounded-full">20 May, 2023</div>
          <div className="flex flex-row gap-x-2 justify-center items-center text-black">
            <IoEyeOutline size={40} color={"pink"} /> <span>325</span>
          </div>
        </div>

        <div className="flex w-full flex-row justify-between text-black py-1">
          <div className="flex flex-col">
            <span className="text-[20px]">Steven Smith</span>
            <span className="text-[35px] font-bold">EcoTrack</span>
          </div>
          <div className="flex w-[40px] h-[40px] rounded-full overflow-hidden">
            <Image
              alt="author_profile_pic"
              src={"/author_pic.png"}
              width={40}
              height={40}
            />
          </div>
        </div>

        <div className="text-gray-700 pb-2">
          <p>
            A mobile app that helps users track and reduce their carbo and b
          </p>
        </div>
        <div className="h-[170px]">
          <Image
            alt="post_thumbnail"
            src={"/post_thumb.png"}
            height={170}
            width={320}
          />
        </div>
        <div className="flex flex-row justify-between py-5 items-center">
          <div className="text-black font-semibold text-[20px]">
            <span>Senior level</span>
          </div>
          <div className="bg-black p-2 rounded-full text-white px-2">
            Details
          </div>
        </div>
      </div>
    </div>
  );
}
