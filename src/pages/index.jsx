import { getTodos } from "@/api/todos";
import { jsonify } from "@/modules/db";

import TodoList from "@/features/todo/list";

export default function Homepage({ todos = [] }) {
  return <TodoList {...{ todos }} />;
}

export async function getServerSideProps(req) {
  const todos = await getTodos();

  return {
    props: {
      todos: jsonify(todos),
    },
  };
}
