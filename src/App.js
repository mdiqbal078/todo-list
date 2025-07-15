import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
  };

  const deleteTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="text-center mb-4">📝 My To‑Do List</h1>
              <TodoInput onAdd={addTask} />
              <ul className="list-group mt-3">
                {tasks.map((t, i) => (
                  <TodoItem key={i} text={t} onDelete={() => deleteTask(i)} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
