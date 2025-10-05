"use client";

interface PaginationProps {
  page: number;
  perPage: number;
  total: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  perPage,
  total,
  onChange,
}: PaginationProps) {
  const totalPages = Math.ceil(total / perPage);

  if (totalPages <= 1) return null;

  // Show only a subset of pages for better UX
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, page - delta);
      i <= Math.min(totalPages - 1, page + delta);
      i++
    ) {
      range.push(i);
    }

    if (page - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (page + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="paginationSection">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="paginationButton"
      >
        ← Previous
      </button>

      {visiblePages.map((pageNum, idx) => {
        if (pageNum === "...") {
          return (
            <span
              key={`dots-${idx}`}
              className="paginationButton"
              style={{
                cursor: "default",
                border: "none",
                background: "transparent",
              }}
            >
              ...
            </span>
          );
        }

        return (
          <button
            key={pageNum}
            onClick={() => onChange(pageNum as number)}
            className={`paginationButton ${page === pageNum ? "active" : ""}`}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="paginationButton"
      >
        Next →
      </button>
    </div>
  );
}
