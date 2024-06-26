/* Display Tasks in Current Todo List in List format */

const TaskCollection = ({ tasks, list }) => {
  const todo = tasks.filter((task) => task.list === list.id);

  const handleDelete = (taskId) => {
    fetch(`http://localhost:8000/tasks/${taskId}`, {
      method: `DELETE`,
    });
  };
  return (
    <div className="task-collection">
      {todo.map((task) => (
        <div className="task" key={task.id}>
          <p>{task.name}</p>
          <button
            className="delete-task"
            onClick={() => {
              handleDelete(task.id);
            }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskCollection;
