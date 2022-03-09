// import "./todo.css";
import { Add } from "./add";
import { Task } from "./task";
import * as api from "../../services/api";
import { useEffect, useState } from "react";
import { TaskI } from "../../interfaces/task-i";

export function List() {
  const [tasks, setTasks] = useState<Array<TaskI>>([]);

  useEffect(() => {
    api.getAllTasks().then(({ data }) => {
      setTasks(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      Lista de tareas
      <Add />
      {tasks.length ? (
        <>
          <h2>Lista de tareas</h2>
          <ul className="task-list">
            {tasks.map((task) => (
              <Task task={task} key={task.id} />
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  );
}
