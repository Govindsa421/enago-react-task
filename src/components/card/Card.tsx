"use client";

import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import styles from "./card.module.scss";
import AuthorBookImage from "../../../public/img/Author_Author_Cover.jpg";
import { Paper } from "@/types/paper";
import { FC } from "react";

// Define component props interface
interface CardProps {
  paper: Paper;
}

const Card: FC<CardProps> = ({ paper }) => {
  const formatImpactFactor = (value: string): string => {
    const num: number = parseFloat(value);
    if (isNaN(num) || num === 0) return "-";
    return num.toFixed(2);
  };

  return (
    <article className={styles.cardContainer}>
      <div className={styles.card}>
        <div>
          <div className={styles.thumb}>
            <Image
              className={styles.img}
              src={AuthorBookImage}
              alt={`Cover for ${paper.papertitle}`}
              width={120}
              height={120}
            />
          </div>
          <div
            className={`${styles.cardbox} ${
              !paper.journalaltimpactfactor ||
              parseFloat(paper.journalaltimpactfactor) === 0
                ? styles.cardboxDefault
                : ""
            }`}
          >
            IF&nbsp;
            <span>
              {formatImpactFactor(paper.journalaltimpactfactor || "0")}
            </span>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.detailRow}>
            <strong>Paper Title:</strong>
            <span className={styles.titleTruncated} title={paper.papertitle}>
              {paper.papertitle}
            </span>
          </div>

          <div className={styles.detailRow}>
            <strong>Authors:</strong>
            <span className={styles.textTruncated} title={paper.coauthors}>
              {paper.coauthors || "N/A"}
            </span>
          </div>

          <div className={styles.detailRow}>
            <strong>Publisher:</strong>
            <span title={paper.publishername}>
              {paper.publishername} ({moment(paper.published_at).format("YYYY")}
              )
            </span>
          </div>

          {paper.journalname && (
            <div className={styles.detailRow}>
              <strong>Journal:</strong>
              <span className={styles.textTruncated} title={paper.journalname}>
                {paper.journalname}
              </span>
            </div>
          )}

          <div className={styles.actions}>
            <Link href={`/details/${paper.id}`}>
              <button className={styles.detailsBtn} type="button">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
