import Link from "next/link";
import { TaskI } from "../../interfaces/task-i";

export function Task({ task }: { task: any }) {
  // const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  const deleteTask = (task: any) => {
    console.log(task);
    // dispatch(removeTask(task, user.token));
  };
  const toggleTask = (task: any) => {
    console.log(task);
    // dispatch(updateTask(task, user.token));
  };

  function handleClick() {
    deleteTask(task);
  }

  function handleChange() {
    toggleTask({ ...task, isCompleted: !task.isCompleted });
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleChange}
      />
      <Link href={`/todo/${task.id}`}>
        <a>
          <span className={task.isCompleted ? "task-completed" : ""}>
            {task.title}
          </span>{" "}
          -<span>{task.responsible.name}</span>
        </a>
      </Link>

      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyPress={handleClick}
      >
        🗑️
      </div>
    </li>
  );
}
