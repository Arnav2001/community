import React from "react";
import { PacmanLoader } from "react-spinners";

const Spinner = ({loading}) => {
  return (
    <div className="loaderMainDiv">
      <PacmanLoader color="#2A2A2A" loading={loading} />
    </div>
  );
};

export default Spinner;
