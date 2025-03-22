import PropTypes from 'prop-types';
import { useContext } from "react";
import { taskContext } from "../Context/Context";

import "./ItemTask.css";

export const ItemTask = ({idTask, titleTask, content}) => {
  const { tasks, updateTaskStatus, deleteTask } = useContext(taskContext);
  const task = tasks.find(task => task.id === idTask);

  const handleCheckboxChange = () => {
    updateTaskStatus(idTask, !task.status);
  };

  const handleDelete = () => {
    deleteTask(idTask);
  };

  return (
    <div className="container">
      <li id={idTask} className={task.status ? "item-task checked" : "item-task"}>
        <div
          className={task.status ? "circle-state circle-green" : "circle-state"}
          title={task.status ? "Tarea completada" : "Tarea pendiente"}
        ></div>
        <h2>{titleTask}</h2>
        <p>{content}</p>
        <div className="task-actions">
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={task.status}
              onChange={handleCheckboxChange}
              aria-label={task.status ? "Marcar como pendiente" : "Marcar como completada"}
            />
            <span>{task.status ? "Completada" : "Marcar como completada"}</span>
          </div>
          <button 
            className="delete-btn" 
            onClick={handleDelete}
            aria-label="Eliminar tarea"
          >
            Eliminar
          </button>
        </div>
      </li>
    </div>
  );
};

ItemTask.propTypes = {
  idTask: PropTypes.string.isRequired,
  titleTask: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

/*
Este componente ItemTask representa una tarea individual en tu gestor de tareas. Utiliza el contexto taskContext
 para acceder a las tareas y actualizar su estado. El componente muestra el título, contenido y estado de la tarea, 
 y permite al usuario marcar la tarea como completada
 o pendiente mediante un checkbox. */