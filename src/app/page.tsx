"use client";

import Card from "@/components/card/Card";
import { usePapers } from "@/hooks/usePapar";
import styles from "@/components/card/card.module.scss";
import SearchBar from "@/components/SearchBar";
import SortControls from "@/components/SortControl";
import Pagination from "@/components/Pagination";
import HomeSkeleton from "@/components/skeleton/HomeSkeleton";

export default function Home() {
  const {
    papers,
    loading,
    error,
    search,
    setSearch,
    sort,
    setSort,
    page,
    setPage,
    total,
    perPage,
  } = usePapers();

  console.log(papers, "papers");

  if (loading) {
    return <HomeSkeleton />;
  }

  if (error) {
    return (
      <div className="container">
        <div className="errorState">
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⚠️</div>
            <div>Error loading papers: {error}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",

            marginBottom: "0.5rem",
          }}
        >
          Research Papers
        </h1>
      </header>

      <SearchBar value={search} onChange={setSearch} />
      <SortControls sort={sort} onChange={setSort} />

      {papers.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            color: "#64748b",
            background: "#f8fafc",
            borderRadius: "12px",
            border: "1px solid #e2e8f0",
          }}
        >
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
          <h3 style={{ marginBottom: "0.5rem" }}>No papers found</h3>
          <p>Try adjusting your search terms or filters</p>
        </div>
      ) : (
        <>
          <div className={styles.cardsGrid}>
            {papers.map((p) => (
              <Card key={p.id} paper={p} />
            ))}
          </div>

          <Pagination
            page={page}
            perPage={perPage}
            total={total}
            onChange={setPage}
          />
        </>
      )}
    </div>
  );
}
