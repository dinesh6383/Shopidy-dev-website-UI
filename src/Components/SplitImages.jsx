import React from "react";

const SplitImages = ({ source }) => {
  return (
    <div className="w-[100%] lg:h-[50vh] md:h-[40vh] xsm:h-[25vh]">
      <img src={source} className="w-[100%] h-[100%]" alt="split-image" />
    </div>
  );
};

export default SplitImages;
