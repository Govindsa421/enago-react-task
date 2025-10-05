"use client";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

interface SortControlsProps {
  sort: { field: string; order: "asc" | "desc" };
  onChange: (sort: { field: string; order: "asc" | "desc" }) => void;
}

export default function SortControls({ sort, onChange }: SortControlsProps) {
  const handleSort = (field: string) => {
    if (sort.field === field) {
      onChange({ field, order: sort.order === "asc" ? "desc" : "asc" });
    } else {
      onChange({ field, order: "asc" });
    }
  };

  const getSortIcon = (field: string) => {
    if (sort.field !== field) return <FaSort />;
    return sort.order === "asc" ? <FaSortUp /> : <FaSortDown />;
  };

  return (
    <div className="controlsSection">
      <button
        onClick={() => handleSort("papertitle")}
        className={`sortButton ${sort.field === "papertitle" ? "active" : ""}`}
      >
        Title {getSortIcon("papertitle")}
      </button>
      <button
        onClick={() => handleSort("published_at")}
        className={`sortButton ${
          sort.field === "published_at" ? "active" : ""
        }`}
      >
        Publication Date {getSortIcon("published_at")}
      </button>
      <button
        onClick={() => handleSort("journalaltimpactfactor")}
        className={`sortButton ${
          sort.field === "journalaltimpactfactor" ? "active" : ""
        }`}
      >
        Impact Factor {getSortIcon("journalaltimpactfactor")}
      </button>
    </div>
  );
}
