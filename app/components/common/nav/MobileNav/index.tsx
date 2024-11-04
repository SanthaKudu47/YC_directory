"use client";
import Image from "next/image";
import NavLinks from "../NavLinks";
import { Session } from "next-auth";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

export default function MobileNav({ session }: { session: Session | null }) {
  const { dispatch, isMenuOpened } = useContext(GlobalContext);
  const menuHandler = function () {
    if (dispatch === null) return;
    if (isMenuOpened === true) {
      dispatch({
        type: "closeMenu",
        value: "",
      });
    } else {
      dispatch({
        type: "openMenu",
        value: "",
      });
    }
  };
  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white">
        <div className="w-full flex-row justify-between flex items-center p-2">
          <div className="flex">
            <Image src={"/logo.png"} alt="logo_image" width={143} height={30} />
          </div>
          <div
            className="font-bold text-black cursor-pointer"
            onClick={menuHandler}
          >
            {isMenuOpened ? <IoIosClose size={32} /> : <IoMdMenu size={32} />}
          </div>
        </div>
        {isMenuOpened && (
          <div className="z-0 bg-slate-400 w-screen  h-full  fixed">
            <NavLinks session={session} />
          </div>
        )}
      </div>
    </>
  );
}
