"use client";

import { useFormState } from "react-dom";
import { subscribe } from "@/actions/subscription";
import SubmitBtn from "../admin/submit-btn";

const initialState = {
  message: "",
};

export default function NewsLetterForm() {
  const [state, formAction] = useFormState(subscribe, initialState);
  return (
    <div>
      <form
        className="max-w-[700px] mx-auto flex gap-x-1 items-center"
        action={formAction}
      >
        <input
          required
          name="email"
          type="text"
          pattern="^\S+@\S+\.\S+$"
          minLength={3}
          maxLength={255}
          title="Please enter a valid email address"
          className="border border-zinc-800 p-2 focus:outline-none  w-full hover:border-orange-500 text-sm sm:text-lg focus:shadow-orange-500 focus:shadow-sm"
          placeholder="Enter email to subscribe to  newsletter"
        />
        <SubmitBtn />
      </form>
      <p className="text-sm text-green-500">{state?.message}</p>
    </div>
  );
}
