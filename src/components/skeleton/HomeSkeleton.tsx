import SearchSkeleton from "./SearchSkeleton";
import SortSkeleton from "./SortSkeleton";
import CardSkeleton from "../card/CardSkeleton";
import PaginationSkeleton from "./PaginationSkeleton";
import styles from "@/components/card/card.module.scss";

export default function HomeSkeleton() {
  return (
    <div className="container">
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
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

      <SearchSkeleton />
      <SortSkeleton />

      <div className={styles.cardsGrid}>
        {Array.from({ length: 6 }, (_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>

      <PaginationSkeleton />
    </div>
  );
}
