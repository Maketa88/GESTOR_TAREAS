import  { useContext, useEffect } from "react";
import "./infoTask.css";
import { taskContext } from "../../Context/Context";

export const InfoTask = () => {
  const context = useContext(taskContext);
  useEffect (()=>{
    let pending = context.tasks.filter(tasks=> tasks.status ===false)
    let resolve = context.tasks.filter(tasks=> tasks.status ===true)
    context.setPendingTasks(pending.length)
    context.setDoneTasks(resolve.length)
  },[context.tasks])

  return (
    <>
      <h2 className="info-tasks">
        
        Tareas Pendientes <span className="task-pending">
          {context.pendingTasks}
        </span> - Tareas Terminadas  <span className="task-done">{context.doneTasks}</span>
        
      </h2>
    </>
  );
};



/* Este componente InfoTask proporciona una manera sencilla y efectiva de mostrar el número de tareas pendientes y terminadas.
El uso del React Context permite que este componente obtenga los datos de tareas de forma global, mientras que useEffect
asegura que la información se mantenga actualizada en respuesta a los cambios en las tareas.

Si algún cambio ocurre en las tareas (agregar, eliminar, cambiar el estado),
el efecto se ejecutará nuevamente, recalculando el número de tareas pendientes y completadas, y actualizando la interfaz de usuario. */
