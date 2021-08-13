import React from "react";
import { Skeleton } from "@material-ui/lab";

const MenuSkeleton: React.FC = () => {
  return (
    <div>
      <Skeleton variant="rect" width={"99%"} height={55} />
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
        style={{ marginLeft: "1.2rem" }}
      />
    </div>
  );
};
export default MenuSkeleton;
