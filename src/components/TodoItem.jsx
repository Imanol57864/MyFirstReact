import React from "react";

function TodoItem({ task, deleteTask, toggleCompleted }) {
  return (
    <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-100 shadow-sm">
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleCompleted(task.id)}
          className="w-4 h-4 text-blue-500 rounded focus:ring-blue-500"
        />
        <p className={`ml-3 ${task.completed ? "text-gray-400 line-through" : "text-gray-800"}`}>
          {task.text}
        </p>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="ml-2 text-gray-400 hover:text-red-500 transition duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;