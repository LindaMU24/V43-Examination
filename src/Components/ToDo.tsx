import React, { useState, useEffect } from "react";
import '../App.css';

interface Task {
  text: string;
  isCompleted: boolean;
};

interface ToDoListProps {
  initialTasks: Task[];
};

const ToDoList: React.FC<ToDoListProps> = ({initialTasks}) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  console.log("Initial Tasks:", JSON.stringify(initialTasks, null, 2));

  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  useEffect(() => {
    // Spara tasks i localStorage vid varje uppdatering
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTaskCompletion = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <ul id="list">
  {tasks.map((task, index) => (
    <li
      key={index}
      className={task.isCompleted ? "checked" : ""}
      role="img"
      aria-label={task.isCompleted ? "Checked item" : "Unchecked item"}
      onClick={() => toggleTaskCompletion(index)}
    >
      <span>{task.text}</span>
      <span onClick={(e) => { e.stopPropagation(); removeTask(index); }}>&times;</span>
    </li>
  ))}
</ul>
  );
};

export default ToDoList;