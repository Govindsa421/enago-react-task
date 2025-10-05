import styles from "./card.module.scss";

export default function CardSkeleton() {
  return (
    <div className={`${styles.card} ${styles.skeleton}`}>
      <div className={styles.thumb}>
        <div className={`${styles.img} ${styles.skeletonElement}`}></div>
        <div className={`${styles.cardbox} ${styles.skeletonElement}`}>
          <span></span>
        </div>
      </div>
      <div className={styles.info}>
        <div
          className={`${styles.skeletonElement} ${styles.skeletonTitle}`}
        ></div>
        <div className={styles.detailRow}>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonLabel}`}
          ></div>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonText}`}
          ></div>
        </div>
        <div className={styles.detailRow}>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonLabel}`}
          ></div>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonText}`}
          ></div>
        </div>
        <div className={styles.detailRow}>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonLabel}`}
          ></div>
          <div
            className={`${styles.skeletonElement} ${styles.skeletonText}`}
          ></div>
        </div>
        <div className={`${styles.detailsBtn} ${styles.skeletonElement}`}></div>
      </div>
    </div>
  );
}
