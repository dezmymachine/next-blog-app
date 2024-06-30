"use client";
import SubmitBtn from "../admin/submit-btn";

export default function NewsLetterForm() {
  return (
    <form className="max-w-[700px] mx-auto flex gap-x-1 items-center">
      <input
        required
        type="text"
        className="border border-zinc-800 p-2 focus:outline-none  w-full hover:border-orange-500 text-sm sm:text-lg focus:shadow-orange-500 focus:shadow-sm"
        placeholder="Enter email to subscribe to  newsletter"
      />
      <SubmitBtn />
    </form>
  );
}
