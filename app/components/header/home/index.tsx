import Subtitle from "../../common/subtitle";
import Title from "../../common/title";
import { IoSearchCircle } from "react-icons/io5";


export default function Header() {
  return (
    <section className="w-full bg-p1 p-x-4 py-[80px] flex flex-col gap-y-4">
      <div className="mx-auto">
        <Subtitle content="Pitch, Vote, and Grow" />
      </div>
      <div className="px-5 w-full md:max-w-[900px] mx-auto text-center md:px-0">
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
      <div className="px-5 md:px-2 py-5">
        <div className="mx-auto border-solid border-4 rounded-full px-2 py-1 border-black w-full max-w-[500px] bg-white text-black font-bold uppercase flex-row flex justify-between items-center">
          <form
            action=""
            className="p-0 m-0 w-full flex-row flex justify-between items-center"
          >
            <input
              type="text"
              className=" text-black font-bold text-[18px] uppercase w-full focus:outline-none"
              placeholder="search startup"
            />
            <button type="submit">
              <div>
                <IoSearchCircle size={50} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
