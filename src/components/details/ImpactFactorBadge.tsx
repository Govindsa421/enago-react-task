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

  const hasValue = impactFactor && parseFloat(impactFactor) > 0;

  return (
    <div
      style={{
        background: hasValue ? "#2a5d9f" : "#2a5d9f",
        color: hasValue ? "white" : "#64748b",
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
