"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div
        style={{
          textAlign: "center",
          padding: "4rem",
          color: "#64748b",
          background: "#f8fafc",
          borderRadius: "12px",
          border: "1px solid #e2e8f0",
          margin: "2rem auto",
          maxWidth: "500px",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📄</div>
        <h2 style={{ marginBottom: "0.5rem", color: "#1e293b" }}>
          Paper Not Found
        </h2>
        <p style={{ marginBottom: "2rem" }}>
          The research paper you&apos;re looking for could not be found.
        </p>
        <Link href="/">
          <button
            style={{
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              border: "none",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              color: "white",
              fontWeight: "600",
              fontSize: "0.875rem",
              transition: "all 0.3s ease",
              boxShadow: "0 2px 4px rgba(59, 130, 246, 0.2)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(59, 130, 246, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 2px 4px rgba(59, 130, 246, 0.2)";
            }}
          >
            ← Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
