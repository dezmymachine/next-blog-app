
export default function EditQuestion() {
  return (
    <form>
      <label htmlFor="faq">Edit Question?</label>
      <textarea
        id="faq"
        name="faq"
        rows={5}
        className="border border-zinc-900 w-full p-2"
      />
      
    </form>
  )
}
