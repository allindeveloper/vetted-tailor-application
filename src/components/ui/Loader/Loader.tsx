import React from "react";
import { LoaderStyle } from "./LoaderStyle";

const Loader = () => (
  <LoaderStyle viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </LoaderStyle>
);

export default Loader;
