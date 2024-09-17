import { useContext } from "react"
import { taskContext } from "../Context/Context"
import './FilterTasks.css'



export const FilterTasks = () => {
    const context =useContext(taskContext)

    const handleFilters =(event)=> {
        let currentOption = event.target.value
        if (currentOption ==='Pendientes'){
            context.setFilteredTasks (context.tasks.filter(task => !task.status))

        }else if (currentOption==='Realizadas'){
            context.setFilteredTasks (context.tasks.filter(task => task.status))
        } else {
            context.setFilteredTasks (context.tasks)
        }
    }

  return (
    <div className="container-filters">
        <label>filtrar por </label>
        <select onChange={handleFilters}>
<option value = "Todas" className="opt opt1">Todas </option>
<option value = "Pendientes" className="opt opt2">Pendientes </option>
<option value = "Realizadas" className="opt opt2">Realizadas </option>
</select>

    </div>
  )
}


/* El componente FilterTasks ofrece una forma sencilla de filtrar las tareas según su estado
(Pendientes, Realizadas o Todas) en un gestor de tareas basado en React. Utiliza React Context para acceder
 a la lista de tareas globalmente y un dropdown select para que el usuario aplique el filtro deseado. El uso del hook
 useContext permite que los cambios en el
 filtro afecten a la lista de tareas en toda la aplicación. */