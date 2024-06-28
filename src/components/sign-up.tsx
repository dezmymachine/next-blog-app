"use client";
import { signup } from "@/actions/auth";
import SubmitButton from "./submit-btn";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};
export default function SignUpForm() {
  //create form state
  const [state, formAction] = useFormState(signup, initialState);
  return (
    <main className=" max-w-[500px] p-5">
      <p className="text-center font-bold text-xl">Sign up to send questions</p>
      <form className="flex flex-col gap-y-2" action={formAction}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          placeholder="Enter your preferred name..."
          className="border border-zinc-900 w-full p-2"
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email..."
          className="border border-zinc-900 w-full p-2"
          required
        />
        <label htmlFor="password">password:</label>
        <input
          id="password"
          type="password"
          name="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          placeholder="Enter your password"
          required
          className="border border-zinc-900 w-full p-2"
        />
        <SubmitButton />
      </form>
    </main>
  );
}
