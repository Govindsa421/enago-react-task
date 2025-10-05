import styles from "./card.module.scss";

export default function CardSkeleton() {
  return (
    <div className={`${styles.card} ${styles.skeleton}`}>
      {/* Image Section */}
      <div className={styles.thumb}>
        <div
          className={`${styles.img} ${styles.skeletonElement}`}
          style={{ height: "200px", width: "150px" }}
        ></div>
        <div
          className={`${styles.cardbox} ${styles.skeletonElement}`}
          style={{ marginTop: "8px", height: "24px" }}
        >
          <span></span>
        </div>
      </div>

      {/* Text Section */}
      <div className={styles.info}>
        <div
          className={`${styles.skeletonElement} ${styles.skeletonTitle}`}
          style={{ marginBottom: "12px" }}
        ></div>

        <div className={styles.detailRow} style={{ marginBottom: "8px" }}>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonLabel}`}
          ></div>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonText}`}
            style={{ marginLeft: "8px" }}
          ></div>
        </div>

        <div className={styles.detailRow} style={{ marginBottom: "8px" }}>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonLabel}`}
          ></div>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonText}`}
            style={{ marginLeft: "8px" }}
          ></div>
        </div>

        <div className={styles.detailRow} style={{ marginBottom: "8px" }}>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonLabel}`}
          ></div>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonText}`}
            style={{ marginLeft: "8px" }}
          ></div>
        </div>

        <div className={styles.detailRow} style={{ marginBottom: "16px" }}>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonLabel}`}
          ></div>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonText}`}
            style={{ marginLeft: "8px" }}
          ></div>
        </div>

        <div
          className={`${styles.detailsBtn} ${styles.skeletonElement}`}
          style={{ height: "36px", width: "120px" }}
        ></div>
      </div>
    </div>
  );
}
