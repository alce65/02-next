/* eslint-disable react/no-typos */
import { SyntheticEvent, useState } from "react";
import { TaskI } from "../../interfaces/task-i";

export function Add() {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const addTask = (newTask: any) => {
    // dispatch(createTask(newTask));
    console.log(newTask);
  };
  const [newTask, setNewTask] = useState<TaskI>({
    title: "",
    responsible: "",
    isCompleted: false,
  });

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    console.log("Added task", newTask);
    addTask({ ...newTask });
    setNewTask({ title: "", responsible: "", isCompleted: false });
  };

  const handleChange = (ev: SyntheticEvent) => {
    const target = ev.target as HTMLInputElement;
    setNewTask({ ...newTask, [target.name]: target.value });
  };

  return (
    <>
      <h2>Add Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Nombre de la tarea"
          value={newTask.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="responsible"
          placeholder="Responsable de la de la tarea"
          value={newTask.responsible}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
