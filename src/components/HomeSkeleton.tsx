import SearchSkeleton from "./SearchSkeleton";
import SortSkeleton from "./SortSkeleton";
import CardSkeleton from "./card/CardSkeleton";
import PaginationSkeleton from "./PaginationSkeleton";
import styles from "./card/card.module.scss";

export default function HomeSkeleton() {
  return (
    <div className="container">
      {/* Header skeleton */}
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <div
          className="skeleton skeletonElement"
          style={{
            height: "3rem",
            width: "400px",
            margin: "0 auto 0.5rem",
            borderRadius: "8px",
          }}
        ></div>
        <div
          className="skeleton skeletonElement"
          style={{
            height: "1.5rem",
            width: "600px",
            margin: "0 auto",
            borderRadius: "6px",
          }}
        ></div>
      </header>

      {/* Search skeleton */}
      <SearchSkeleton />

      {/* Sort controls skeleton */}
      <SortSkeleton />

      {/* Result count skeleton */}
      <div
        style={{
          marginBottom: "1.5rem",
          padding: "1rem",
          background: "#f8fafc",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
          textAlign: "center",
        }}
      >
        <div
          className="skeleton skeletonElement"
          style={{
            height: "1.2rem",
            width: "200px",
            margin: "0 auto",
            borderRadius: "4px",
          }}
        ></div>
      </div>

      {/* Cards grid skeleton */}
      <div className={styles.cardsGrid}>
        {Array.from({ length: 6 }, (_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>

      {/* Pagination skeleton */}
      <PaginationSkeleton />
    </div>
  );
}
