export default function SortSkeleton() {
  return (
    <div className="controlsSection">
      <div
        className="sortButton skeleton skeletonElement"
        style={{ width: "120px", height: "40px" }}
      ></div>
      <div
        className="sortButton skeleton skeletonElement"
        style={{ width: "140px", height: "40px" }}
      ></div>
      <div
        className="sortButton skeleton skeletonElement"
        style={{ width: "100px", height: "40px" }}
      ></div>
    </div>
  );
}
