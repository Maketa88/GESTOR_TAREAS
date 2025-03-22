import { useContext, useEffect } from "react";
import { taskContext } from "../../Context/Context";
import "./infoTask.css";

export const InfoTask = () => {
  const context = useContext(taskContext);
  useEffect(() => {
    let pending = context.tasks.filter(tasks => tasks.status === false);
    let resolve = context.tasks.filter(tasks => tasks.status === true);
    context.setPendingTasks(pending.length);
    context.setDoneTasks(resolve.length);
  }, [context.tasks]);

  return (
    <>
      <h2 className="info-tasks">
        Pending Tasks <span className="task-pending">
          {context.pendingTasks}
        </span> - Completed Tasks <span className="task-done">{context.doneTasks}</span>
      </h2>
    </>
  );
};



/* This component InfoTask provides a simple and effective way to display the number of pending and completed tasks.
The use of React Context allows this component to obtain task data globally, while useEffect
ensures that the information is kept up-to-date in response to changes in the tasks.

If any change occurs in the tasks (add, delete, change status),
the effect will run again, recalculating the number of pending and completed tasks, and updating the user interface. */
