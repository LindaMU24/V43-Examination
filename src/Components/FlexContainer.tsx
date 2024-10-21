import React, { useEffect, useState } from 'react';
import InputComponent from './input';
import ToDoList from "./ToDo";

interface Task {
  text: string;
  isCompleted: boolean;
}

const FlexContainer: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect((): void => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      try {
        const parsedTasks: Task[] = JSON.parse(storedTasks);
        setTasks(parsedTasks);
        console.log("Tasks laddade och satta från LocalStorage:", parsedTasks);
      } catch (error) {
        console.error("Error parsing tasks from localStorage:", error);
      }
    } else {
      console.log("Inga tasks hittades i LocalStorage vid laddning.");
    }
    setIsLoading(false); // Markera att laddningen är klar
  }, []);


  useEffect((): void => {
    if (tasks.length > 0) {
      console.log("Saving tasks to localStorage:", tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);


  const addTask = (taskText: string) => {
    const newTask: Task = { text: taskText, isCompleted: false };
    const updatedTasks = [...tasks, newTask];
     console.log("Lägger till ny task:", updatedTasks);
     setTasks(updatedTasks);
   };
   
  return (
    <div className="flex-container">
      <InputComponent onAddTask={addTask} />
      {!isLoading && <ToDoList initialTasks={tasks} />} {/* Rendera bara när laddningen är klar */}
    </div>
  );
};

export default FlexContainer;