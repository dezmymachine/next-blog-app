import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-5 max-w-[1200px]">
      <div className="flex flex-col  gap-y-10">{children}</div>
    </div>
  );
}
