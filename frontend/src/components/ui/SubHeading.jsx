import React from "react";

const SubHeading = ({ label }) => {
  return (
    <div className="font-medium text-slate-500 max-w-80 flex justify-center text-center">
      {label}
    </div>
  );
};

export default SubHeading;
