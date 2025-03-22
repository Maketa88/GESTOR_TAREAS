import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const taskContext = createContext();

const tsk = [
  {
    id: uuidv4(),
    title: "Corregir bug en login",
    descripcion:
      "Resolver el problema de autenticación en el módulo de inicio de sesión.",
    status: false,
  },
  {
    id: uuidv4(),
    title: "Refactorizar componente",
    descripcion:
      "Optimizar el código del componente de usuario para mejorar el rendimiento.",
    status: true,
  },

  {
    id: uuidv4(),
    title: "Agregar validación de formulario",
    descripcion:
      "Implementar validaciones en el formulario de registro para mejorar la entrada de datos.",
    status: false,
  },
  {
    id: uuidv4(),
    title: "Optimizar consultas SQL",
    descripcion:
      "Revisar y mejorar el rendimiento de las consultas en la base de datos para reducir tiempos de respuesta.",
    status: true,
  },
];

export const TaskProvider = ({ children }) => {
  // Cargar tareas desde localStorage si existen, de lo contrario usar tareas predeterminadas
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || tsk;
  
  const [tasks, setTask] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);
  const [currentFilter, setCurrentFilter] = useState("Todas");

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Aplicar el filtro activo cada vez que las tareas cambian
  useEffect(() => {
    applyFilter(currentFilter);
  }, [tasks, currentFilter]);

  // Función para aplicar filtro
  const applyFilter = (filter) => {
    if (filter === "Pendientes") {
      setFilteredTasks(tasks.filter(task => !task.status));
    } else if (filter === "Realizadas") {
      setFilteredTasks(tasks.filter(task => task.status));
    } else {
      setFilteredTasks(tasks);
    }
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <taskContext.Provider
      value={{
        tasks,
        setTask,
        pendingTasks,
        setPendingTasks,
        doneTasks,
        setDoneTasks,
        filteredTasks,
        setFilteredTasks,
        updateTaskStatus,
        deleteTask,
        currentFilter,
        setCurrentFilter,
        applyFilter
      }}
    >
      {children}
    </taskContext.Provider>
  );
};

// Agregar validación de props
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired
};

/*
Este código configura un contexto para gestionar tareas en una aplicación de React. Utiliza useState para manejar el 
estado de las tareas y proporciona funciones para actualizar ese estado. El componente TaskProvider envuelve otros componentes y les da acceso
a este contexto, permitiendo una gestión centralizada y eficiente de las tareas. */
