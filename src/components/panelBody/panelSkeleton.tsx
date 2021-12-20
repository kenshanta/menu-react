import React from "react";
import { Skeleton } from "@material-ui/lab";

const PanelSkeleton: React.FC = () => {
  return (
    <div style={{ height: "100%", backgroundColor: "#f9f2ef" }}>
      <Skeleton variant="rect" width={"100%"} height={48} />
      <Skeleton
        variant="text"
        height={60}
        width={"85%"}
        style={{ margin: "1rem 0 0 1.2rem" }}
      />
      <Skeleton
        variant="text"
        height={60}
        width={"85%"}
        style={{ marginLeft: "1.2rem" }}
      />
      <Skeleton
        variant="text"
        height={60}
        width={"85%"}
        style={{ marginLeft: "1.2rem" }}
      />
      <Skeleton
        variant="text"
        height={60}
        width={"85%"}
        style={{ marginLeft: "1.2rem" }}
      />
      <Skeleton
        variant="text"
        height={60}
        width={"85%"}
        style={{ marginLeft: "1.2rem" }}
      />
      <Skeleton
        variant="text"
        height={60}
        width={"85%"}
        style={{ marginLeft: "1.2rem" }}
      />
      <Skeleton
        variant="text"
        height={60}
        width={"85%"}
        style={{ marginLeft: " 1.2rem" }}
      />
      <Skeleton
        variant="text"
        height={60}
        width={"85%"}
        style={{ marginLeft: "1.2rem" }}
      />
      <Skeleton
        variant="text"
        height={60}
        width={"85%"}
        style={{ margin: "0 0 0 1.2rem" }}
      />
      <Skeleton
        variant="text"
        height={60}
        width={"85%"}
        style={{ margin: "1rem 0 1rem 1.2rem" }}
      />
      <div>
        <Skeleton
          variant="text"
          height={60}
          width={"85%"}
          style={{ margin: "1rem 0 1rem 1.2rem" }}
        />
        <Skeleton
          variant="text"
          height={60}
          width={"85%"}
          style={{ margin: "1rem 0 1rem 1.2rem" }}
        />
      </div>
    </div>
  );
};
export default PanelSkeleton;
