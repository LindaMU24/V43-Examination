import React from "react";

interface LocalStorageProps {
  tasks: string[];
}

const LocalStorage: React.FC<LocalStorageProps> = ({ tasks }): JSX.Element => {
  return (
    <>
      {tasks.map((task: string, index: number) => (
        <ul id="list" key={index}>
          <li>{task}</li>
        </ul>
      ))}
    </>
  );
};

export default LocalStorage;
