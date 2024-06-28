import Link from "next/link";

export function EditQuestionId({ id }: { id: string }) {
  return (
    <Link href={`/admin/${id}/edit`}>
      <button
        className="bg-green-600 text-white px-2 py-1 rounded w-20"
        type="submit"
      >
        Edit
      </button>
    </Link>
  );
}
