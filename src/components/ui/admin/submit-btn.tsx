import { useFormStatus } from "react-dom";
export default function SubmitBtn() {
  const { pending, data } = useFormStatus();
  return (
    <div>
      <button
        aria-disabled={pending}
        className="bg-zinc-800 font-bold text-orange-300 p-1 w-1/2 hover:bg-orange-300 hover:text-zinc-800 disabled:bg-100"
      >
        Submit
      </button>
      <p className=" text-green-700 font-bold text-xl">{data ? `Sending ...` : ""}</p>
    </div>
  );
}
