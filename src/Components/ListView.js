import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './useFetch.js';
import TaskCollection from './TaskCollection.js';

const ListView = () => {
  /* Fetch specific todo list */
  const { id } = useParams();
  const {
    data: list,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/lists/${id}`);

  /* Fetch collection of tasks */
  const {
    data: tasks,
    isPendingTasks,
    errorTasks,
  } = useFetch(`http://localhost:8000/tasks`);

  /* Delete list */
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:8000/lists/` + id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  /* Handle submission for adding task */
  const [task, setTask] = useState(null);
  const handleSubmit = (event) => {
    if (task !== null) {
      event.preventDefault();

      const list = { name: task, list: id };

      fetch(`http://localhost:8000/tasks`, {
        method: 'POST',
        headers: { 'Content-type': 'application/job' },
        body: JSON.stringify(list),
      }).then(() => {
        console.log('new task added');
      });

      document.querySelector('.add-task-input').value = ``;
      document.querySelector('.submit-task').classList.remove('adding-task');
    }
  };

  return (
    <div className="list-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {list && (
        <div>
          <h1 className="title">{list.name}</h1>
          <div className="info">
            <p className="date-created">Created {list.date}</p>
            <p className="description">{list.description}</p>
          </div>

          {/* Task List Display */}
          {isPendingTasks && <div>Loading...</div>}
          {errorTasks && <div>{errorTasks}</div>}
          {tasks && <TaskCollection tasks={tasks} list={list}></TaskCollection>}

          {/* Input new task */}
          <form onSubmit={handleSubmit} className="submit-task">
            <label>New Task</label>
            <input
              type="text"
              className="add-task-input"
              onChange={(e) => {
                setTask(e.target.value);
              }}
              placeholder="Add a new task"
            />
            <button
              id="submit-new-task"
              className="add-task-button"
              onClick={() => {
                document
                  .querySelector('.submit-task')
                  .classList.remove('adding-task');
              }}>
              Add
            </button>
          </form>

          {/* Buttons */}
          <div className="buttons">
            <button
              className="add-task-button"
              onClick={() => {
                document
                  .querySelector('.submit-task')
                  .classList.add('adding-task');
              }}
              style={{ marginRight: 5 }}>
              Add a new task
            </button>
            <button className="delete" onClick={handleDelete}>
              Delete list
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListView;
