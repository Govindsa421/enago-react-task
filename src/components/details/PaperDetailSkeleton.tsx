export default function PaperDetailSkeleton() {
  return (
    <div>
      <div
        className="skeleton skeletonElement"
        style={{
          width: "120px",
          height: "40px",
          borderRadius: "8px",
          marginBottom: "2rem",
        }}
      ></div>

      <div
        style={{
          background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)",
          borderRadius: "16px",
          padding: "2rem",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(226, 232, 240, 0.8)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              flexShrink: 0,
            }}
          >
            <div
              className="skeleton skeletonElement"
              style={{
                width: "200px",
                height: "260px",
                borderRadius: "12px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
              }}
            ></div>

            <div
              className="skeleton skeletonElement"
              style={{
                width: "120px",
                height: "40px",
                borderRadius: "20px",
              }}
            ></div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              className="skeleton skeletonElement"
              style={{
                width: "100%",
                height: "2.5rem",
                borderRadius: "8px",
                marginBottom: "1.5rem",
              }}
            ></div>

            <div
              style={{
                display: "grid",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
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

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
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
                    width: "60%",
                    height: "1.2rem",
                    borderRadius: "6px",
                  }}
                ></div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
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
                    width: "40%",
                    height: "1.2rem",
                    borderRadius: "6px",
                  }}
                ></div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                }}
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
                    width: "80%",
                    height: "3rem",
                    borderRadius: "6px",
                  }}
                ></div>
              </div>
            </div>

            <div
              className="skeleton skeletonElement"
              style={{
                width: "180px",
                height: "3rem",
                borderRadius: "8px",
                marginTop: "1rem",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
