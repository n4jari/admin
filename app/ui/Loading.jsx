import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = ({ height }) => {
  return (
    <Skeleton height={height} baseColor="#182237" highlightColor="#151c2c" />
  );
};

export default Loading;
