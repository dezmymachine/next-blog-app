import SignInForm from "@/components/sign-in";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <SignInForm />
      <p className="px-5">
        Don't have an account ?
        <Link href="/signup" className="text-blue-700">
          Sign up
        </Link>
      </p>
    </div>
  );
}
