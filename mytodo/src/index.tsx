import React from "react";
import { render } from "react-dom";

export const App: React.FC = () => {
  return <div>my todo</div>;
};

const app = document.querySelector("#app");
render(<App />, app);
