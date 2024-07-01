//Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
export function BlogCardSkeleton() {
  return (
    <div className="flex flex-col max-w-[400px] gap-y-2 relative overflow-hidden p-5">
      <div
        className={`w-full h-[400px] bg-gray-200 relative overflow-hidden ${shimmer}`}
      />

      <div
        className={`w-24 h-4 bg-gray-200 relative overflow-hidden ${shimmer}`}
      />

      <div
        className={`w-full h-6 bg-gray-200 relative overflow-hidden ${shimmer}`}
      />

      <div
        className={`w-full h-10 bg-gray-200 relative overflow-hidden ${shimmer}`}
      />

      <div
        className={`w-1/3 h-8 bg-gray-200 mt-2 relative overflow-hidden ${shimmer}`}
      />
    </div>
  );
}

export function BlogGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-y-10  lg:grid-cols-3 ">
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
      <BlogCardSkeleton />
    </div>
  );
}

export function FeatureCardSkeleton() {
  return (
    <div
      className="flex flex-col items-center justify-center overflow-hidden relative"
      style={{ height: "70dvh" }}
    >
      <div className="w-full" style={{ height: "50dvh" }}>
        <div
          className={`w-full h-full bg-gray-200 relative overflow-hidden ${shimmer}`}
        />
      </div>
      <div
        className="h-full w-full bg-gray-200 opacity-60 absolute"
        style={{ height: "50dvh" }}
      />
      <div className="absolute text-center mx-auto max-w-[700px] w-full px-5 sm:p-0">
        <div
          className={`w-full h-8 sm:h-10 bg-gray-200 mx-auto relative overflow-hidden ${shimmer}`}
        />
      </div>
    </div>
  );
}
