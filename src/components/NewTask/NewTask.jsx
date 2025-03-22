import React, { useContext, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { taskContext } from "../Context/Context";
import "./NewTask.css";

export const NewTask = () => {
  const context = useContext(taskContext);

  const [titleTask, setTitleTask] = useState("");
  const [descripcionTask, setDescripcionTask] = useState("");

  const txtTitle = useRef("");
  const txtDescripcion = useRef("");

  const handleTitleTask = (event) => setTitleTask(event.target.value);
  const handleDescripcionTask = (event) =>
    setDescripcionTask(event.target.value);

  const handleCreateTask = (event) => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: titleTask,
      descripcion: descripcionTask,
      status: false,
    };

    context.setTask((prevTasks) => [...prevTasks, newTask]);
    context.setFilteredTasks((prevFilteredTasks) => [
      ...prevFilteredTasks,
      newTask,
    ]);

    txtTitle.current.value = "";
    txtDescripcion.current.value = "";

    setTitleTask("");
    setDescripcionTask("");
  };

  return (
    <form onSubmit={handleCreateTask} className="frm-task">
      <fieldset className="task-fieldset">
        <label htmlFor="txt-title">Task Title</label>
        <input
          className="input"
          ref={txtTitle}
          onChange={handleTitleTask}
          id="txt-title"
          placeholder="Fix login bug"
          type="text"
          maxLength={100}
          value={titleTask}
          required
        />
      </fieldset>

      <fieldset className="task-fieldset">
        <label htmlFor="txt-description">Task Description</label>

        <textarea
          className="input textarea"
          ref={txtDescripcion}
          onChange={handleDescripcionTask}
          id="txt-description"
          placeholder="Solve authentication issues in the login module"
          maxLength={500}
          value={descripcionTask}
          rows="4"
          required
        ></textarea>
      </fieldset>

      <button type="submit" className="btn-new-task">
        Add Task
      </button>
    </form>
  );
};


/* This component is responsible for handling the creation of new tasks within the task manager.
It uses various React hooks (useState, useRef, useContext) to manage the local and global state of the application.
The new task is added to the global state using the context, and after creating it, the form is cleared. */