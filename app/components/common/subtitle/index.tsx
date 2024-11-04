export default function Subtitle({
  content = "Pitch, Vote, and Grow",
}: {
  content: string;
}) {
  return (
    <div className="rounded-lg bg-p2 p-2 text-black font-bold uppercase text-[12px] md:text-[20px]">
      {content}
    </div>
  );
}
