"use client";
import { useFormStatus } from "react-dom";
export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      className="bg-zinc-900 text-white rounded p-2 w-44 disabled:bg-zinc-700"
    >
      Submit
    </button>
  );
}
