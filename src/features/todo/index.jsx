import { useState } from "react";

import TodoForm from "./form";

export default function Todo({ ...rest }) {
  const [editing, setEditing] = useState(false);
  const [todo, setTodo] = useState(rest);
  const { _id, text, status } = todo;

  return editing ? (
    <TodoForm
      {...{
        value: { status, text, _id },
        onChange: setTodo,
        onSave: ({ _id }) => {
          if (_id) setTodo({ ...todo, _id });
          setEditing(false);
        },
      }}
    />
  ) : (
    <div>
      <div>{_id}</div>
      <div>{text}</div>
      <div>{status}</div>
      <button onClick={() => setEditing(true)}>Edit</button>
    </div>
  );
}
