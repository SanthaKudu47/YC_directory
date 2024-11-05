import Title from "../../common/title";

export default function Header() {
  return (
    <section className="w-full bg-p1 p-x-4 py-[80px] flex flex-col gap-y-4 justify-center items-center mt-[40px] md:mt-0">
      <div className="px-5 w-full md:max-w-[900px] mx-auto text-center md:px-0">
        <Title>
          <>
            <h3>Submit your startup pitch</h3>
          </>
        </Title>
      </div>
    </section>
  );
}
