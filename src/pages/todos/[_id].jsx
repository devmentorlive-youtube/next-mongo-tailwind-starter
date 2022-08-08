import { getTodo } from "@/api/todos/[_id]";
import { jsonify } from "@/modules/db";

import Todo from "@/features/todo";

export default function TodoPage({ todo }) {
  return <Todo {...{ ...todo }} />;
}

export async function getServerSideProps(req) {
  const todo = await getTodo(req.query._id);

  return {
    props: {
      ...jsonify(todo),
    },
  };
}
