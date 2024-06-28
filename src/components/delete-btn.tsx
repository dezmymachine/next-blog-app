import { deleteQuestion } from "@/actions/question";

export function DeleteQuestionId({ id }: { id: string }) {
  const deleteWithId = deleteQuestion.bind(null, id);
  return (
    <form action={deleteWithId}>
      <button className="bg-red-500 text-white px-2 py-1 rounded" type="submit">
        Delete
      </button>
    </form>
  );
}
