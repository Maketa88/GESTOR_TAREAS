import { useContext } from 'react';
import { taskContext } from '../../Context/Context'; // Asegúrate de usar la ruta correcta
import { Header } from "../../Layouts/Header/Header";
import { Main } from "../../Layouts/Main/Main";
import { ContainerTasks } from "../../Layouts/ContainerTask/ContainerTasks";
import { ItemTask } from "../../ItemTask/ItemTask";
import { NewTask } from '../../NewTask/NewTask';
import { InfoTask } from '../../Layouts/InfoTask/InfoTask'
import { FilterTasks } from '../../FilterTask/FilterTasks';


export const Home = () => {
  const context = useContext(taskContext); // Usa useContext para obtener el contexto

  return (
    <>
      <Header>
        <h1>Gestor de tareas</h1>
        <InfoTask/>
        <NewTask/>
        <FilterTasks/>
        
      
        
      </Header>
      
      <Main>
        <ContainerTasks>
          {context.filteredTasks.map(task => 
            <ItemTask
              key={task.id}
              idTask={task.id}
              content={task.descripcion}
              titleTask={task.title}
            />
          )}
        </ContainerTasks>
      </Main>
    </>
  );
};
