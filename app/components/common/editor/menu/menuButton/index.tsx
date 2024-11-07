import { ReactNode } from "react";

export default function MenuButton({
  text = "column 1",
  children,
}: {
  text: string;
  children: ReactNode;
}) {
  return (
    <div className="flex w-full p-2 justify-center items-center flex-col hover:bg-slate-800 rounded-lg cursor-pointer">
      {children}
      <span>{text}</span>
    </div>
  );
}
