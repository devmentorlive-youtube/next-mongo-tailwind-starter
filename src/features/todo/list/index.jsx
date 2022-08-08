export default function TodoList({ todos }) {
  return (
    <div>
      <h1>Todos</h1>
      {todos.map(({ text, status }) => (
        <div>
          {text} {status}
        </div>
      ))}
    </div>
  );
}
