import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from './useFetch';
import TaskCollection from './TaskCollection.js';

const ListDetails = () => {
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

  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`http://localhost:8000/lists/` + id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="list-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {list && (
        <div>
          <h1 className="title">{list.name}</h1>
          <div className="info">
            <p className="description">{list.description}</p>
            <p className="date-created">{list.date}</p>
          </div>

          <input type="text" className="task-name" />

          {/* Task List Display */}
          {isPendingTasks && <div>Loading...</div>}
          {errorTasks && <div>{errorTasks}</div>}
          {tasks && <TaskCollection tasks={tasks} list={list}></TaskCollection>}

          <button className="delete" onClick={handleClick}>
            Delete list
          </button>
        </div>
      )}
    </div>
  );
};

export default ListDetails;
