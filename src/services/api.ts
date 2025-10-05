interface Paper {
  id: string;
  papertitle: string;
  coauthors: string;
  publishername: string;
  published_at: string;
  journalaltimpactfactor: string;
  doi: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // to catch extra fields
}

export const API_URL = "https://easydash.enago.com/acceptedpapers";

export async function fetchPapers(query: string = "") {
  try {
    const res = await fetch(`${API_URL}${query}`);
    if (!res.ok) throw new Error("Failed to fetch papers");
    return await res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}

export async function getPaper(id: string) {
  const data = await fetchPapers();
  return data.find((p: Paper) => String(p.id) === id);
}
