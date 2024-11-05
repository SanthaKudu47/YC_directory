"use client";
import { signInAction, signOutAction } from "@/app/actions/auth";
import { GlobalContext } from "@/context/globalContext";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function NavLinks({ session }: { session: Session | null }) {
  const { dispatch, isMenuOpened } = useContext(GlobalContext);
  const isSessionExist = session ? true : false;
  const defaultProfileImage = session?.user?.image
    ? session?.user?.image
    : "/default_profile_image.png";

  const closeMenu = function () {
    if (dispatch === null) return;
    if (isMenuOpened === true) {
      dispatch({ type: "closeMenu", value: null });
    }
  };
  return (
    <>
      <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 gap-x-0  md:gap-x-5 text-gray-700 w-full items-center justify-center md:justify-end bg-white px-4">
        <Link onClick={closeMenu} href={"/create"}>
          Create
        </Link>
        {isSessionExist ? (
          <div>
            <form action={signOutAction}>
              <button className="text-textP1" type="submit">
                Logout
              </button>
            </form>
          </div>
        ) : (
          <div>
            <form action={signInAction}>
              <button type="submit">Github</button>
            </form>
          </div>
        )}
        {isSessionExist && (
          <div>
            <Link href={"/profile"}>
              <div className="flex flex-row gap-x-5 items-center">
                <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
                  <Image
                    alt="profile_pic"
                    src={defaultProfileImage}
                    width={36}
                    height={36}
                  />
                </div>
                <div>{session?.user?.name}</div>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
