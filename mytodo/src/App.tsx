import React, { useState } from "react";
import { render } from "react-dom";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export type Todo = {
  title: string;
};

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: "reactペアプロ" },
    { title: "リリース確認" },
  ]);
  return (
    <>
      <div>my todo</div>
      <TodoInput
        onClick={(v) => {
          setTodos([...todos, { title: v }]);
        }}
      ></TodoInput>
      {todos.map((todo, i) => {
        return (
          <TodoItem
            todo={todo}
            key={i}
            remove={() => {
              setTodos(todos.filter((_, j) => i !== j));
            }}
          ></TodoItem>
        );
      })}
    </>
  );
};

const app = document.querySelector("#app");
render(<App />, app);
