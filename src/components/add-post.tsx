"use client";
import { useFormState } from "react-dom";
import { createPost } from "@/actions/post";
import SubmitBtn from "./submit-btn";

const initialState = {
  message: "",
};
export default function AddPostForm() {
  const [state, formAction] = useFormState(createPost, initialState);
  return (
    <>
      <div className="p-3">
        <h1>Add Post</h1>
        <form action={formAction} className="flex flex-col max-w-lg gap-y-2">
          <label htmlFor="title" className="">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="border border-zinc-800 p-2"
          />
          <label htmlFor="content" className="">
            Content
          </label>
          <textarea
            id="content"
            rows={5}
            name="content"
            className="border border-zinc-800 p-2"
          />
          <label htmlFor="image" className="">
            Image
          </label>
          <input type="file" id="image" name="image" className="" />
          <SubmitBtn />
        </form>
      </div>
    </>
  );
}
