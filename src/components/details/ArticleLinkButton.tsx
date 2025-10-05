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
          boxShadow: "0 4px 6px rgba(59, 130, 246, 0.2)",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow =
            "0 6px 12px rgba(59, 130, 246, 0.3)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 6px rgba(59, 130, 246, 0.2)";
        }}
      >
        📖 Read Full Article
      </a>
    </div>
  );
}
