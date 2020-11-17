import React, { useState } from "react";
import { render } from "react-dom";
import { TodoInput } from "./TodoInput";

export const App: React.FC = () => {
  const [todos, setTodos] = useState(["react pairpro", "review"]);
  return (
    <>
      <div>my todo</div>
      <TodoInput
        onClick={(v) => {
          setTodos([...todos, v]);
        }}
      ></TodoInput>
      {todos.map((todo, index) => {
        return <div key={index}>{todo}</div>;
      })}
    </>
  );
};

const app = document.querySelector("#app");
render(<App />, app);
