import { useContext } from "react";
import { taskContext } from "../Context/Context";

import "./ItemTask.css";

export const ItemTask = ({idTask, titleTask, content}) => {
  const { tasks, updateTaskStatus } = useContext(taskContext);
  const task = tasks.find(task => task.id === idTask);

  const handleCheckboxChange = ()=>{
    updateTaskStatus (idTask, !task.status)
  }
  return (
    <div className="container">
    <li id={idTask} className={task.status ? "item-task checked" : "item-task"}>
      <div
        className={task.status ? "circle-state circle-green" : "circle-state"}
      ></div>
      <h2>{titleTask}</h2>
      <p>{content}</p>
      <input
        type="checkbox"
        checked={task.status}
        onChange={handleCheckboxChange}
      ></input>
    </li>
    </div>
   
    
  );
};

/*
Este componente ItemTask representa una tarea individual en tu gestor de tareas. Utiliza el contexto taskContext
 para acceder a las tareas y actualizar su estado. El componente muestra el título, contenido y estado de la tarea, 
 y permite al usuario marcar la tarea como completada
 o pendiente mediante un checkbox. */