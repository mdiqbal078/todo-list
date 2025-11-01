function TodoItem({ text, completed, onToggle, onDelete }) {
  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        type="checkbox"
        className="form-check-input me-2"
        checked={completed}
        onChange={onToggle}
      />
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "#6c757d" : "inherit",
          flex: 1,
        }}
      >
        {text}
      </span>
      <button className="btn btn-sm btn-danger ms-2" onClick={onDelete}>
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
