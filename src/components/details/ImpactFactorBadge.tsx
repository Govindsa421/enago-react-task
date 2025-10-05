"use client";

interface ImpactFactorBadgeProps {
  impactFactor?: string;
}

export default function ImpactFactorBadge({
  impactFactor,
}: ImpactFactorBadgeProps) {
  const formatImpactFactor = (value: string | undefined) => {
    if (!value) return "-";
    const num = parseFloat(value);
    if (isNaN(num) || num === 0) return "-";
    return num.toFixed(2);
  };

  return (
    <div
      style={{
        background: "#2a5d9f",
        color: "#fff",
        padding: "0.75rem 1.5rem",
        borderRadius: "25px",
        fontSize: "0.875rem",
        fontWeight: "600",
        textAlign: "center",

        whiteSpace: "nowrap",
        transition: "all 0.3s ease",
      }}
    >
      Impact Factor: {formatImpactFactor(impactFactor)}
    </div>
  );
}
