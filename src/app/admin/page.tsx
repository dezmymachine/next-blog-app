import Card from "@/components/card";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { validateRequest } from "@/lib/validate";

export default async function Page() {
  const { user } = await validateRequest();
  if (!user) {
    return redirect("/login");
  }

  let questions = await prisma.question.findMany();

  return (
    <main className=" p-5">
      <h3>Questions from users</h3>
      <p>
        We have <span className="font-bold">{questions.length}</span> questions
        so far
      </p>
      <div className="border border-zinc-800 p-2 flex flex-col gap-y-2">
        {questions &&
          questions.map((question) => (
            <>
              <Card key={question.id} text={question.faq} id={question.id} />
            </>
          ))}
      </div>
    </main>
  );
}
