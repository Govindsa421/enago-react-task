"use client";

import { useEffect, useState } from "react";
import { fetchPapers } from "@/services/api";

export function usePapers() {
  const [papers, setPapers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<{ field: string; order: "asc" | "desc" }>({
    field: "title",
    order: "asc",
  });
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const data = await fetchPapers();
        setPapers(data);
        setTotal(data.length);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Derived data
  const filtered = papers.filter((p) =>
    p.papertitle.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    const valA = a[sort.field] ?? "";
    const valB = b[sort.field] ?? "";
    if (valA < valB) return sort.order === "asc" ? -1 : 1;
    if (valA > valB) return sort.order === "asc" ? 1 : -1;
    return 0;
  });

  const paginated = sorted.slice((page - 1) * perPage, page * perPage);

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
  };
}
