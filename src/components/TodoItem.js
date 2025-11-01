function TodoItem({ text, completed, onToggle, onDelete }) {
  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        type="checkbox"
        className="form-check-input me-2"
        checked={completed}
        onChange={onToggle}
      />
      <span className={`task-text ${completed ? "task-completed" : "task-pending"}`}>
        {text}
      </span>
      <button className="btn btn-sm btn-danger ms-2" onClick={onDelete}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
