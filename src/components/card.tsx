import Link from "next/link";
import { DeleteQuestionId } from "./delete-btn";
import { EditQuestionId } from "./edit-btn";

type Question = {
  text: String;
  id: String;
};

export default function Card({ text, id }: Question) {
  return (
    <div className="flex gap-x-5 items-center">
      <Link href={`/admin/${id}/edit`} className="w-3/4">
        <p>{text}</p>
      </Link>
      <EditQuestionId id={`${id}`} />
      <DeleteQuestionId id={`${id}`} />
    </div>
  );
}
