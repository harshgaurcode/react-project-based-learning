import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div>
      <TodoInput onAddTodo={onToggle} /> {/* Passes addTodo function */}
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
