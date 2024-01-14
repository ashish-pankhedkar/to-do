import React, { useState } from "react";
import Checkbox from "./Checkbox";

const TaskCard = ({ name, done, id, onToggle, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
 function handleDelete() {
    onDelete(id);
 }
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={"taskCard " + (done ? "done" : "notdone")}
    >
      <Checkbox checked={done} onCheck={() => onToggle(!done)} />
      <span>{name}</span>
      {isHovered && <div className="dlt">
        <button className="deleteBtn" onClick={handleDelete}> X </button>
      </div>}

      
    </div>
  );
};

export default TaskCard;
