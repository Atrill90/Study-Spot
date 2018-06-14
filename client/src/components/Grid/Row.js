import React from "react";

export const Row = ({ fluid, children,id }) => (
  <div id = {id} className={`row${fluid ? "-fluid" : ""}`}>
    {children} 
  </div>
);
