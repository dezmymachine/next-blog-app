import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col mx-auto pt-24 text-center gap-y-5">
      <p className="font-bold text-4xl">Welcome to Freemium Tech Support</p>
      <p className="text-2xl">
        Have any questions? Login and ask the experts for free
      </p>
      <div className="flex gap-x-5 justify-center">
        <Link href="/login" className="rounded p-1 bg-zinc-950 text-white w-20">
          Login
        </Link>
        <Link
          href="/signup"
          className="rounded p-1 bg-zinc-600 text-white w-20"
        >
          Sign up
        </Link>
      </div>
    </main>
  );
}
