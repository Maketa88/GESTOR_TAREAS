import { useContext } from 'react';
import { taskContext } from '../../Context/Context'; // Asegúrate de usar la ruta correcta
import { FilterTasks } from '../../FilterTask/FilterTasks';
import { ItemTask } from "../../ItemTask/ItemTask";
import { ContainerTasks } from "../../Layouts/ContainerTask/ContainerTasks";
import { Header } from "../../Layouts/Header/Header";
import { InfoTask } from '../../Layouts/InfoTask/InfoTask';
import { Main } from "../../Layouts/Main/Main";
import { NewTask } from '../../NewTask/NewTask';
import './Home.css';


export const Home = () => {
  const context = useContext(taskContext); // Usa useContext para obtener el contexto

  // Filtrar tareas para la visualización
  const pendingTasks = context.tasks.filter(task => !task.status);
  const completedTasks = context.tasks.filter(task => task.status);

  return (
    <>
      <Header>
        <h1>Task Manager</h1>
        <InfoTask/>
        <NewTask/>
        <FilterTasks/>
      </Header>
      
      <Main>
        {context.currentFilter === "All" ? (
          <div className="tasks-sections">
            <div className="tasks-section">
              <h2 className="section-title">Pending Tasks</h2>
              <ContainerTasks>
                {pendingTasks.length > 0 ? (
                  pendingTasks.map(task => 
                    <ItemTask
                      key={task.id}
                      idTask={task.id}
                      content={task.descripcion}
                      titleTask={task.title}
                    />
                  )
                ) : (
                  <p className="no-tasks">No pending tasks</p>
                )}
              </ContainerTasks>
            </div>

            <div className="tasks-section">
              <h2 className="section-title">Completed Tasks</h2>
              <ContainerTasks>
                {completedTasks.length > 0 ? (
                  completedTasks.map(task => 
                    <ItemTask
                      key={task.id}
                      idTask={task.id}
                      content={task.descripcion}
                      titleTask={task.title}
                    />
                  )
                ) : (
                  <p className="no-tasks">No completed tasks</p>
                )}
              </ContainerTasks>
            </div>
          </div>
        ) : (
          <div className="tasks-sections">
            <div className="tasks-section">
              <h2 className="section-title">
                {context.currentFilter === "Pending" ? "Pending Tasks" : "Completed Tasks"}
              </h2>
              <ContainerTasks>
                {context.filteredTasks.length > 0 ? (
                  context.filteredTasks.map(task => 
                    <ItemTask
                      key={task.id}
                      idTask={task.id}
                      content={task.descripcion}
                      titleTask={task.title}
                    />
                  )
                ) : (
                  <p className="no-tasks">No {context.currentFilter.toLowerCase()} tasks</p>
                )}
              </ContainerTasks>
            </div>
          </div>
        )}
      </Main>
    </>
  );
};
