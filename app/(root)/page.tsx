import Header from "../components/header/home";
import Card from "../components/common/card";

export default function Home() {
  console.log("Page component...");
  return (
    <section>
      <Header />
      <section className="max-w-[1280px] w-full mx-auto relative py-[100px]">
        <h3 className="text-black text-[18px] font-bold">
          Recommended startups
        </h3>
        <div className="flex flex-row gap-x-4 py-5">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </section>
    </section>
  );
}
