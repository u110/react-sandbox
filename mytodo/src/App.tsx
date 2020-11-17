import React, { useState } from "react";
import { render } from "react-dom";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export type Todo = {
  title: string;
  done: boolean;
};

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { title: "reactペアプロ", done: false },
    { title: "リリース確認", done: true },
  ]);
  return (
    <>
      <div>my todo</div>
      <TodoInput
        onClick={(v) => {
          setTodos([...todos, { title: v, done: false }]);
        }}
      ></TodoInput>
      {todos.map((todo, i) => {
        return (
          <TodoItem
            todo={todo}
            key={i}
            toggleItem={() => {
              setTodos(
                todos.map((td, j) => {
                  if (i === j) {
                    return { title: td.title, done: !td.done };
                  }
                  return td;
                })
              );
            }}
            removeItem={() => {
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
