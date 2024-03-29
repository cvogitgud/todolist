/* Display Tasks in Current Todo List in List format */

const TaskCollection = ({ tasks, list }) => {
  const todo = tasks.filter((task) => task.list === list.id);
  return (
    <div className="task-collection">
      {todo.map((task) => (
        <div className="task" key={task.id}>
          <p>{task.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskCollection;
