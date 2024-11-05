import Header from "@/app/components/header/create";

export default function CreatePage() {
  return (
    <div>
      <Header />
      <section className="w-full min-w-[350px] md:max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col justify-center">
          <form action="" className="text-black">
            <div className="flex flex-col gap-y-2 py-2">
              <label htmlFor="title_id" className="uppercase font-bold">
                Title
              </label>
              <div className="border-black border-2 border-solid rounded-full overflow-hidden p-2">
                <input
                  type="text"
                  id="title_id"
                  name="title"
                  placeholder="Enter title of startup pitch"
                  className="focus:outline-none text-black w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2 py-2">
              <label htmlFor="description_id" className="uppercase font-bold">
                Description
              </label>
              <div className="border-black border-2 border-solid rounded-3xl overflow-hidden p-2">
                <textarea
                  rows={2}
                  id="description_id"
                  name="description"
                  placeholder="Enter description on pitch"
                  className="focus:outline-none text-black w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-2 py-2">
              <label htmlFor="category_id" className="uppercase font-bold">
                Category
              </label>
              <div className="border-black border-2 border-solid rounded-3xl overflow-hidden p-2">
                <input
                  type="text"
                  id="category_id"
                  name="title"
                  placeholder="Enter category of pitch"
                  className="focus:outline-none text-black w-full"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
