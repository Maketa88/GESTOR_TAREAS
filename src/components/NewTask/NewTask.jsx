import React, { useContext, useRef, useState } from "react";
import { taskContext } from "../Context/Context";
import { v4 as uuidv4 } from "uuid";
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
        <label htmlFor="txt-title">Título de la tarea</label>
        <input
          className="input"
          ref={txtTitle}
          onChange={handleTitleTask}
          id="txt-title"
          placeholder="Realizar aseo del ambiente"
          type="text"
          maxLength={100}
          value={titleTask}
          required
        />
      </fieldset>

      <fieldset className="task-fieldset">
        <label htmlFor="txt-description">Descripción de la tarea</label>

        <input
          className="input"
          ref={txtDescripcion}
          onChange={handleDescripcionTask}
          id="txt-description"
          placeholder="Barrer el ambiente 7 y 8"
          type="text"
          maxLength={100}
          value={descripcionTask}
          required
        />
      </fieldset>

      <button type="submit" className="btn-new-task">
        Agregar Tarea
      </button>
    </form>
  );
};


/* Este componente es responsable de manejar la creación de nuevas tareas dentro del gestor de tareas.
Utiliza varios hooks de React (useState, useRef, useContext) para gestionar el estado local y global de la aplicación.
La nueva tarea se agrega al estado global
utilizando el contexto, y después de crearla, se limpia el formulario. */