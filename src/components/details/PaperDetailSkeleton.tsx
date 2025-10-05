export default function PaperDetailSkeleton() {
  return (
    <div>
      {/* Back button skeleton */}
      <div
        className="skeleton skeletonElement"
        style={{
          width: "120px",
          height: "40px",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      ></div>

      {/* Paper detail skeleton */}
      <div style={{ maxWidth: "800px" }}>
        {/* Title skeleton */}
        <div
          className="skeleton skeletonElement"
          style={{
            width: "100%",
            height: "3rem",
            borderRadius: "8px",
            marginBottom: "1.5rem",
          }}
        ></div>

        <div
          className="skeleton skeletonElement"
          style={{
            width: "80%",
            height: "2rem",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        ></div>

        {/* Details grid skeleton */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{ display: "flex", gap: "1rem", alignItems: "center" }}
            >
              <div
                className="skeleton skeletonElement"
                style={{
                  width: "120px",
                  height: "1.2rem",
                  borderRadius: "6px",
                }}
              ></div>
              <div
                className="skeleton skeletonElement"
                style={{
                  flex: 1,
                  height: "1.2rem",
                  borderRadius: "6px",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Impact factor badge skeleton */}
        <div
          className="skeleton skeletonElement"
          style={{
            width: "200px",
            height: "2.5rem",
            borderRadius: "20px",
            marginBottom: "2rem",
          }}
        ></div>

        {/* Article link button skeleton */}
        <div
          className="skeleton skeletonElement"
          style={{
            width: "180px",
            height: "3rem",
            borderRadius: "8px",
          }}
        ></div>
      </div>
    </div>
  );
}
