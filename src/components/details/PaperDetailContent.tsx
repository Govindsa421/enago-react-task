"use client";
import Image from "next/image";
import moment from "moment";
import AuthorBookImage from "../../../public/img/Author_Author_Cover.jpg";
import ImpactFactorBadge from "./ImpactFactorBadge";
import ArticleLinkButton from "./ArticleLinkButton";

interface Paper {
  id: string;
  papertitle: string;
  coauthors: string;
  publishername: string;
  published_at: string;
  journalaltimpactfactor: string;
  //   doi?: string;
  journalname?: string;
  articlelink?: string;
}

interface PaperDetailContentProps {
  paper: Paper;
}

export default function PaperDetailContent({ paper }: PaperDetailContentProps) {
  return (
    <div
      style={{
        background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
        borderRadius: "16px",
        padding: "2rem",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        border: "1px solid rgba(226, 232, 240, 0.8)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Main Layout: Image Left, Content Right */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
        }}
      >
        {/* Left Side - Book Image and Impact Factor */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Image
              src={AuthorBookImage}
              alt={`Cover for ${paper.papertitle}`}
              width={200}
              height={260}
              style={{
                borderRadius: "12px",
                objectFit: "cover",
                display: "block",
              }}
              priority
            />
          </div>

          {/* Impact Factor Badge */}
          <ImpactFactorBadge impactFactor={paper.journalaltimpactfactor} />
        </div>

        {/* Right Side - Paper Information */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Title */}
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#1e293b",
              lineHeight: "1.2",
              marginBottom: "1.5rem",
              wordWrap: "break-word",
            }}
          >
            {paper.papertitle}
          </h1>

          {/* Key Information Grid */}
          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
            >
              <strong
                style={{
                  minWidth: "120px",
                  color: "#475569",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
              >
                Authors:
              </strong>
              <span
                style={{
                  color: "#64748b",
                  lineHeight: "1.5",
                  fontSize: "0.875rem",
                }}
              >
                {paper.coauthors}
              </span>
            </div>

            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
            >
              <strong
                style={{
                  minWidth: "120px",
                  color: "#475569",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
              >
                Publisher:
              </strong>
              <span
                style={{
                  color: "#64748b",
                  lineHeight: "1.5",
                  fontSize: "0.875rem",
                }}
              >
                {paper.publishername}
              </span>
            </div>

            {paper.journalname && (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
              >
                <strong
                  style={{
                    minWidth: "120px",
                    color: "#475569",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                  }}
                >
                  Journal:
                </strong>
                <span
                  style={{
                    color: "#64748b",
                    lineHeight: "1.5",
                    fontSize: "0.875rem",
                  }}
                >
                  {paper.journalname}
                </span>
              </div>
            )}

            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}
            >
              <strong
                style={{
                  minWidth: "120px",
                  color: "#475569",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
              >
                Published:
              </strong>
              <span
                style={{
                  color: "#64748b",
                  lineHeight: "1.5",
                  fontSize: "0.875rem",
                }}
              >
                {moment(paper.published_at).format("MMMM DD, YYYY")}
              </span>
            </div>

            {/* DOI Link Component */}
            {/* <DOILink doi={paper.doi} /> */}
          </div>

          {/* Article Link Button */}
          <ArticleLinkButton articleLink={paper.articlelink} />
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          div:first-child {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center;
          }

          div:first-child > div:first-child {
            margin-bottom: 2rem;
          }

          h1 {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
