import prisma from "@/lib/db";
import { updateQuestion } from "@/actions/question";
import SubmitButton from "@/components/submit-btn";

export default async function Page({ params }: { params: { id: string } }) {
  const question = await prisma.question.findUnique({
    where: {
      id: params.id,
    },
  });
  const updateQuestionWithId = updateQuestion.bind(null, params.id);

  return (
    <div className="p-5">
      <p className="pt-4 pb-5">Edit Question</p>
      <form className="flex flex-col gap-y-5" action={updateQuestionWithId}>
        <textarea
          name="faq"
          defaultValue={question?.faq}
          rows={5}
          className="w-1/2 border border-zinc-900 p-2"
        />
        <SubmitButton />
      </form>
    </div>
  );
}
