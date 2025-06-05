// components/TopUpForm.tsx
import { CgSearch } from "react-icons/cg";

export default function TopUpForm() {
  return (
    <section className="relative z-50 font-bold text-center text-sky-900 p-4 bg-white -mt-10 rounded-t-2xl sm:rounded-t-[50px] ">
      <div className="border rounded-3xl mx-auto mt-8 max-w-[450px]">
        <form
          action="#top-up-form"
          className="w-full flex flex-col items-center justify-center p-4"
        >
          <h1 className="font-bold text-lg">Ready to send a top-up?</h1>

          <div className="flex items-center w-full rounded-full border border-gray-300 p-3 m-4 focus-within:border-limeBright focus-within:shadow-sm focus-within:ring-2">
            <CgSearch />
            <input
              type="text"
              name="top-up-number"
              className="w-full outline-none bg-transparent"
              placeholder="Enter number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-limeBright rounded-full min-w-32 p-3 m-4"
          >
            Start top-up
          </button>
        </form>
      </div>
    </section>
  );
}
// components/TopUpForm.tsx