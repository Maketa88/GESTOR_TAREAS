import { useContext } from "react"
import { taskContext } from "../Context/Context"
import './FilterTasks.css'



export const FilterTasks = () => {
    const context =useContext(taskContext)

    const handleFilters =(event)=> {
        const selectedFilter = event.target.value
        context.setCurrentFilter(selectedFilter)
        context.applyFilter(selectedFilter)
    }

  return (
    <div className="container-filters">
        <label>Filter by </label>
        <select onChange={handleFilters} value={context.currentFilter}>
<option value = "All" className="opt opt1">All</option>
<option value = "Pending" className="opt opt2">Pending</option>
<option value = "Completed" className="opt opt2">Completed</option>
</select>

    </div>
  )
}


/* The FilterTasks component offers a simple way to filter tasks by their status
(Pending, Completed, or All) in a React-based task manager. It uses React Context to access
the task list globally and a dropdown select for the user to apply the desired filter. The use of the
useContext hook allows changes in the filter to affect the task list throughout the application. */