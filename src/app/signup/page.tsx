import SignUpForm from "@/components/sign-up";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <SignUpForm />
      <p className="px-5">
        Already have an account ?{" "}
        <Link href="/login" className="text-blue-700">
          Log in
        </Link>
      </p>
    </div>
  );
}
