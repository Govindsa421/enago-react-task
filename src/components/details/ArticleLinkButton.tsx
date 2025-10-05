"use client";

interface ArticleLinkButtonProps {
  articleLink?: string;
}

export default function ArticleLinkButton({
  articleLink,
}: ArticleLinkButtonProps) {
  if (!articleLink) return null;

  return (
    <div style={{ marginTop: "2rem" }}>
      <a
        href={articleLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "#2a5d9f",
          color: "white",
          padding: "0.75rem 1.5rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "0.875rem",
          fontWeight: "600",

          transition: "all 0.3s ease",
        }}
      >
        Read Full Article
      </a>
    </div>
  );
}
