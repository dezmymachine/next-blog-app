import QuestionForm from "@/components/question-form";
import { validateRequest } from "@/lib/validate";
import { redirect } from "next/navigation";
export default async function Page() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }
  return (
    <div className="py-10">
      <QuestionForm />
    </div>
  );
}
