import React from "react";
import { Todo } from "./App";

type Props = {
  todo: Todo;
  remove: () => void;
};
export const TodoItem: React.FC<Props> = ({ todo, remove }) => {
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => remove()}>remove</button>
    </div>
  );
};
