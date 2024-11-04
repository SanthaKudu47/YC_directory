import Subtitle from "../subtitle";
import Title from "../title";

export default function Header() {
  return (
    <section className="w-full bg-p1 p-x-4 py-[80px] flex flex-col gap-y-4">
      <div className="mx-auto">
        <Subtitle content="Pitch, Vote, and Grow" />
      </div>
      <div className="px-10 w-full md:max-w-[900px] mx-auto text-center md:px-0">
        <Title>
          <>
            <h3>
              Pitch Your Startup,
              <br />
              Connect with Entrepreneurs
            </h3>
          </>
        </Title>
      </div>
      <div className="mx-auto text-center pt-[50px]">
        <h3>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </h3>
      </div>
    </section>
  );
}
