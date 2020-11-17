import React, { useState } from "react";

type Props = {
  onClick: (v: string) => void;
};

export const TodoInput: React.FC<Props> = ({ onClick }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button
        disabled={value === ""}
        onClick={() => {
          onClick(value);
          setValue("");
        }}
      >
        add todo
      </button>
    </>
  );
};
