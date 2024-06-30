"use client";
import SubmitBtn from "../admin/submit-btn";

export default function NewsLetterForm() {
  return (
    <form className="max-w-[700px] flex gap-x-1 items-center">
      <input
        required
        type="text"
        className="border border-zinc-800 p-2 w-full "
        placeholder="Enter email to subscribe to  newsletter"
      />
      <SubmitBtn />
    </form>
  );
}
