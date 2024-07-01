import React from "react";
import NewsLetterForm from "./newsletter-form";

export default function NewsLetter() {
  return (
    <section className="text-center mb-20">
        <p className="mb-3 text-xl font-bold">Subcribe to the newsletter !</p>
      <NewsLetterForm />
    </section>
  );
}
