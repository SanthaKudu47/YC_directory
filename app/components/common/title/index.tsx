import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full bg-black p-2 uppercase font-bold text-[35px] md:text-[45px]">{children}</div>
    </>
  );
}
