"use client";

import Link from "next/link";

export default function BackButton() {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            border: "2px solid #e2e8f0",
            cursor: "pointer",
            background: "white",
            color: "#475569",
            fontSize: "0.875rem",
            fontWeight: "600",
            transition: "all 0.3s ease",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <span></span> Back to Home
        </button>
      </Link>
    </div>
  );
}
