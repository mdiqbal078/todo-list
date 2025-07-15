import { useState } from "react";

function TodoInput({ onAdd }) {
  const [input, setInput] = useState("");

  const submit = () => {
    if (input.trim() === "") return;
    onAdd(input);
    setInput("");
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={input}
        placeholder="Enter a task…"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <button className="btn btn-primary" onClick={submit}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
