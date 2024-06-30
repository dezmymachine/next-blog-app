import SubmitBtn from "../admin/submit-btn";
export default function CommentForm() {
  return (
    <form className="max-w-[700px] flex-col flex gap-y-2 my-10">
      <textarea
        required
        rows={2}
        className="border border-zinc-800 p-2 focus:outline-none  w-full hover:border-orange-500 text-sm sm:text-lg focus:shadow-orange-500 focus:shadow-sm"
        placeholder="Add your voice to the conversation ..."
      />
      <SubmitBtn />
    </form>
  );
}
