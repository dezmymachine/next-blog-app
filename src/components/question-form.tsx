"use client";
import { useFormState } from "react-dom";
import SubmitButton from "./submit-btn";
import { AddQuestion } from "@/actions/question";
export default function QuestionForm() {
  //initialise state
  const initialState = {
    message: "",
  };
  //create form state
  const [state, formAction] = useFormState(AddQuestion, initialState);
  return (
    <main className="mx-auto max-w-[500px]">
      <form
        className="flex items-center justify-center flex-col gap-y-5"
        action={formAction}
      >
        <label htmlFor="faq">Ask Question?</label>
        <textarea
          id="faq"
          name="faq"
          rows={5}
          className="border border-zinc-900 w-full p-2"
        />
        <SubmitButton />
      </form>
    </main>
  );
}
