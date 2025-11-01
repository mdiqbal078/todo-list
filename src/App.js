import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("todoTasks");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
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
                  {tasks.map((t) => (
                    <TodoItem
                      key={t.id}
                      text={t.text}
                      completed={t.completed}
                      onToggle={() => toggleTask(t.id)}
                      onDelete={() => deleteTask(t.id)}
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
