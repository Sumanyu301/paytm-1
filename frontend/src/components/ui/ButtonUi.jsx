import React from "react";
import { Link } from "react-router-dom";
const ButtonUi = ({ label }) => {
  return (
    <div>
      <Link
        to={"/dashboard"}
        className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
        href="#"
      >
        <span className="absolute inset-0 border border-slate-900 group-active:border-slate-950"></span>
        <span className="block border border-slate-900 bg-slate-950 px-12 py-3 transition-transform active:border-slate-900 active:bg-slate-950 group-hover:-translate-x-1 group-hover:-translate-y-1">
          {label}
        </span>
      </Link>
    </div>
  );
};

export default ButtonUi;
