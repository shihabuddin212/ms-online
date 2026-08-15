"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page rendering failed:", error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-slate-900">Something went wrong</h1>
      <p className="mt-3 text-slate-600">
        Please try again. If the issue continues, contact Ms Online support.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-full bg-sky-700 px-6 py-3 font-semibold text-white"
      >
        Try again
      </button>
    </main>
  );
}
