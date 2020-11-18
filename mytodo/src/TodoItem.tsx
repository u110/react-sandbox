import React, { useState } from "react";
import { isLineBreak } from "../node_modules/typescript/lib/typescript";
import { Todo } from "./App";

type Props = {
  todo: Todo;
  removeItem: () => void;
  toggleItem: () => void;
};
export const TodoItem: React.FC<Props> = ({ todo, removeItem, toggleItem }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleItem()}
      ></input>
      <span style={{ textDecorationLine: todo.done ? "line-through" : "none" }}>
        {todo.title}
      </span>
      <button onClick={() => removeItem()}>remove</button>
    </div>
  );
};
