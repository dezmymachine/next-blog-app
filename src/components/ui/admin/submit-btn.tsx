import { useFormStatus } from "react-dom";
export default function SubmitBtn() {
  const { pending, data } = useFormStatus();
  return (
    <div>
      <button
        aria-disabled={pending}
        className="bg-orange-500 text-white p-2 font-bold disabled:bg-slate-300"
      >
        Submit
      </button>
      <p className=" text-green-700 font-bold text-xl">
        {data ? `Sending ...` : ""}
      </p>
    </div>
  );
}
