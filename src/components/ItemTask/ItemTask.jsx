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
          title={task.status ? "Completed task" : "Pending task"}
        ></div>
        <h2>{titleTask}</h2>
        <p>{content}</p>
        <div className="task-actions">
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              checked={task.status}
              onChange={handleCheckboxChange}
              aria-label={task.status ? "Mark as pending" : "Mark as completed"}
            />
            <span>{task.status ? "Completed" : "Mark as completed"}</span>
          </div>
          <button 
            className="delete-btn" 
            onClick={handleDelete}
            aria-label="Delete task"
          >
            Delete
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
This component ItemTask represents an individual task in your task manager. It uses the taskContext
to access the tasks and update their status. The component displays the title, content, and status of the task,
and allows the user to mark the task as completed or pending via a checkbox. */