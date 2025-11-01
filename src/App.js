import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("todoTasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  const toggleTask = (idx) => {
    setTasks(
      tasks.map((task, i) =>
        i === idx ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="text-center mb-4">📝 My To‑Do List</h1>
              <TodoInput onAdd={addTask} />
              {tasks.length > 0 && (
                <div className="mt-3 mb-2 text-muted small">
                  {completedCount} of {tasks.length} completed
                </div>
              )}
              {tasks.length === 0 ? (
                <div className="text-center text-muted mt-4 py-5">
                  <h4>🎯 No tasks yet!</h4>
                  <p>Add a task above to get started.</p>
                </div>
              ) : (
                <ul className="list-group mt-3">
                  {tasks.map((t, i) => (
                    <TodoItem
                      key={i}
                      text={t.text}
                      completed={t.completed}
                      onToggle={() => toggleTask(i)}
                      onDelete={() => deleteTask(i)}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
