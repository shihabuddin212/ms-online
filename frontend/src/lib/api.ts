/** Server Components call the API through the VPS loopback address. */
export function getServerApiUrl() {
  const url =
    process.env.API_INTERNAL_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://127.0.0.1:5000";

  return url.replace(/\/$/, "");
}

export async function fetchServerApi(path: string) {
  return fetch(`${getServerApiUrl()}${path}`, {
    cache: "no-store",
    signal: AbortSignal.timeout(5_000),
  });
}
