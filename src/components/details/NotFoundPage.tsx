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
        <h2 style={{ marginBottom: "0.5rem", color: "#1e293b" }}>
          Paper Not Found
        </h2>
        <p style={{ marginBottom: "2rem" }}>
          The research paper you&apos;re looking for could not be found.
        </p>
        <Link href="/">
          <button
            style={{
              border: "none",
              padding: "0.75rem 1rem",
              borderRadius: "8px",
              cursor: "pointer",
              color: "white",
              fontWeight: "600",
              fontSize: "0.875rem",
              transition: "all 0.3s ease",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
