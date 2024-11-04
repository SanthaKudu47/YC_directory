import Image from "next/image";
import { auth } from "@/auth";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
export default async function NavBar() {
  const session = await auth(); //this will be a dynamic route
  return (
    <div className="relative">
      <MobileNav session={session} />
      <div className="bg-white w-full  flex flex-row justify-center relative">
        <div className="hidden md:flex mx-auto h-[80px]  flex-row items-center justify-between w-full max-w-[350px] md:max-w-[680px] lg:max-w-[1280px] px-0 lg:px-5">
          <div>
            <Image src={"/logo.png"} alt="logo_image" width={143} height={30} />
          </div>

          {/* <div className="w-screen bg-gray-500 h-screen relative"></div> */}
          <div className="hidden md:block">
            <NavLinks session={session} />
          </div>
        </div>
      </div>
    </div>
  );
}
