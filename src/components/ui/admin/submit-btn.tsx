'use client'
import Image from "next/image";
import loadIcon from "../../../../public/loading.svg"
import { useFormStatus } from "react-dom";
export default function SubmitBtn() {
  const { pending, data } = useFormStatus();
  return (
    <div>
      <button
        aria-disabled={pending}
        className="bg-orange-500 hover:bg-orange-400 text-white p-2 sm:p-2.5 sm:w-32 font-bold disabled:bg-slate-300"
      >
        {pending ? (
          <div className="flex gap-2">
            <Image src={loadIcon} alt="loading" width={20} height={20} />
            <p className="text-sm">Sending</p>
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </div>
  );
}
