"use client";

import { useEffect, useState } from "react";
import { fetchPapers } from "@/services/api";
import { Paper } from "@/types/paper";

// Define sort configuration type
interface SortConfig {
  field: keyof Paper;
  order: "asc" | "desc";
}

// Define hook return type
interface UsePapersReturn {
  papers: Paper[];
  loading: boolean;
  error: string | null;
  search: string;
  setSearch: (search: string) => void;
  sort: SortConfig;
  setSort: (sort: SortConfig) => void;
  page: number;
  setPage: (page: number) => void;
  perPage: number;
  total: number;
}

export function usePapers(): UsePapersReturn {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<SortConfig>({
    field: "papertitle",
    order: "asc",
  });
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(10);

  useEffect(() => {
    async function load(): Promise<void> {
      try {
        setLoading(true);
        const data: Paper[] = await fetchPapers();
        setPapers(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Derived data with proper typing
  const filtered: Paper[] = papers.filter((paper: Paper) =>
    paper.papertitle.toLowerCase().includes(search.toLowerCase())
  );

  const sorted: Paper[] = [...filtered].sort((a: Paper, b: Paper) => {
    const valA = a[sort.field];
    const valB = b[sort.field];

    // Convert to string for comparison, handle arrays
    const strA = Array.isArray(valA)
      ? valA.join(", ")
      : String(valA ?? "").toLowerCase();
    const strB = Array.isArray(valB)
      ? valB.join(", ")
      : String(valB ?? "").toLowerCase();

    if (strA < strB) return sort.order === "asc" ? -1 : 1;
    if (strA > strB) return sort.order === "asc" ? 1 : -1;
    return 0;
  });

  const paginated: Paper[] = sorted.slice((page - 1) * perPage, page * perPage);

  return {
    papers: paginated,
    loading,
    error,
    search,
    setSearch,
    sort,
    setSort,
    page,
    setPage,
    perPage,
    total: filtered.length,
  } as const;
}
