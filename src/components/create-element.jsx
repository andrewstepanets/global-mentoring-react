import React from "react";

const text = "It's a component created by createElement";
export const h1 = React.createElement("h2", null, "Create Element");
export const p = React.createElement(
  "p",
  {
    id: "info-text",
    className: "details",
  },
  text
);
