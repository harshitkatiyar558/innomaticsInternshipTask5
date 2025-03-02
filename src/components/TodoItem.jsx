import React, { useState } from 'react';

const TodoItem = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(task.id, editTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
        />
      ) : (
        <span
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          onClick={() => toggleComplete(task.id)}
        >
          {task.text}
        </span>
      )}
      <div>
        <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        <button onClick={() => deleteTodo(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;