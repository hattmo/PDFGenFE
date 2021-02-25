import React from "react";
import ReactDom from "react-dom";
import App from "../lib/App";

const root = document.createElement("div");
root.style.height = "100%";
document.body.appendChild(root);

if (!globalThis.api) {
  globalThis.api = {
    parseCSV: () =>
      Promise.resolve({
        headers: ["one", "five", "four", "six"],
        data: [{ one: "foo", five: "bar", four: "baz", six: "blooz" }],
      }),
    getFields: () => Promise.resolve("Blah"),
  };
}

ReactDom.render(<App />, root);
