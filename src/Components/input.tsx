import React, { useState } from 'react';
import '../App.css';

interface InputComponentProps {
  onAddTask: (task: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);

  const handleButtonClick = () => {
    if (inputValue.trim() === '') {
      setShowError(true);
    } else {
      setShowError(false);
      onAddTask(inputValue); // Lägg till uppgiften
      setInputValue('');
    }
  };

  return (
    <div className="to-do">
      <h1>Lindas TO-DO list</h1>
      <div className="row">
      <input
        type="text"
        id="task-input"
        name="task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Mer som ska göras"
      />
        {showError && <p style={{ color: 'red' }}>Skriv din nya uppgift!</p>}
        <button onClick={handleButtonClick}>Lägg till</button>
      </div>
    </div>
  );
};

export default InputComponent;
