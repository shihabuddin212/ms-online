"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main style={{ fontFamily: "Arial, sans-serif", margin: "10vh auto", maxWidth: 640, padding: 24, textAlign: "center" }}>
          <h1>Ms Online is temporarily unavailable</h1>
          <p>Please refresh or try again in a moment.</p>
          <button type="button" onClick={reset}>Try again</button>
        </main>
      </body>
    </html>
  );
}
