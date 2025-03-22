import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const taskContext = createContext();

const tsk = [
  {
    id: uuidv4(),
    title: "Fix login bug",
    descripcion:
      "Solve authentication issues in the login module",
    status: false,
  },
  {
    id: uuidv4(),
    title: "Refactor component",
    descripcion:
      "Optimize user component code to improve performance",
    status: true,
  },

  {
    id: uuidv4(),
    title: "Add form validation",
    descripcion:
      "Implement validations in the registration form to improve data entry",
    status: false,
  },
  {
    id: uuidv4(),
    title: "Optimize SQL queries",
    descripcion:
      "Review and improve database query performance to reduce response times",
    status: true,
  },
];

export const TaskProvider = ({ children }) => {
  // Load tasks from localStorage if they exist, otherwise use default tasks
  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || tsk;
  
  const [tasks, setTask] = useState(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState(initialTasks);
  const [pendingTasks, setPendingTasks] = useState(0);
  const [doneTasks, setDoneTasks] = useState(0);
  const [currentFilter, setCurrentFilter] = useState("All");

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Apply the active filter whenever tasks change
  useEffect(() => {
    applyFilter(currentFilter);
  }, [tasks, currentFilter]);

  // Function to apply filter
  const applyFilter = (filter) => {
    if (filter === "Pending") {
      setFilteredTasks(tasks.filter(task => !task.status));
    } else if (filter === "Completed") {
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

// Add props validation
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired
};

/*
This code sets up a context for managing tasks in a React application. It uses useState to handle the
state of tasks and provides functions to update that state. The TaskProvider component wraps other components and gives them access
to this context, allowing centralized and efficient task management. */
