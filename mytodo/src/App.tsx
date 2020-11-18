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

  const [filterTarget, setFilterTarget] = useState<"all" | "active" | "done">(
    "all"
  );
  return (
    <>
      <div>my todo</div>
      <TodoInput
        onClick={(v) => {
          setTodos([...todos, { title: v, done: false }]);
        }}
      ></TodoInput>
      <div>
        <button
          onClick={() => {
            setFilterTarget("all");
          }}
          style={filterTarget === "all" ? { color: "#f00" } : {}}
        >
          ALL
        </button>
        <button
          onClick={() => {
            setFilterTarget("active");
          }}
          style={filterTarget === "active" ? { color: "#f00" } : {}}
        >
          Active
        </button>
        <button
          onClick={() => {
            setFilterTarget("done");
          }}
          style={filterTarget === "done" ? { color: "#f00" } : {}}
        >
          Done
        </button>
      </div>
      {todos
        .filter((todo) => {
          if (filterTarget === "active") {
            return !todo.done;
          }
          if (filterTarget === "done") {
            return todo.done;
          }
          return true;
        })
        .map((todo, i) => {
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
