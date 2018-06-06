import React from "react";

export const Col = ({ size, children, id }) => (
  <div className={size.split(" ").map(size => "col-" + size).join(" ")} id={id}>
    {children}
  </div>
);