export default function PaginationSkeleton() {
  return (
    <div className="paginationSection">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <div
          className="paginationButton skeleton skeletonElement"
          style={{ width: "40px", height: "40px" }}
        ></div>
        <div
          className="paginationButton skeleton skeletonElement"
          style={{ width: "40px", height: "40px" }}
        ></div>
        <div
          className="paginationButton skeleton skeletonElement"
          style={{ width: "40px", height: "40px" }}
        ></div>
        <div
          className="paginationButton skeleton skeletonElement"
          style={{ width: "40px", height: "40px" }}
        ></div>
        <div
          className="paginationButton skeleton skeletonElement"
          style={{ width: "40px", height: "40px" }}
        ></div>
      </div>
    </div>
  );
}
