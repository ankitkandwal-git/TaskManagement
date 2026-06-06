import React from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const TaskCard = ({ task, onEdit, onDelete, onToggle }) => {
  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-green-100 text-green-800',
  };

  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-orange-100 text-orange-800',
  };

  return (
    <div className={`border-l-4 p-4 mb-4 rounded-lg bg-gray-50 ${task.status === 'completed' ? 'border-green-500 opacity-70' : 'border-blue-500'}`}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className={`text-lg font-bold ${task.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-800'}`}>
            {task.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{task.description}</p>
        </div>
        <div className="flex gap-2 ml-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority] || 'bg-gray-100 text-gray-800'}`}>
            {task.priority || 'normal'}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
            {task.status}
          </span>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button 
          onClick={() => onToggle && onToggle(task._id)}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
        >
          <FaCheck size={14} />
          Done
        </button>
        <button 
          onClick={() => onEdit && onEdit(task)}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
        >
          <FaEdit size={14} />
          Edit
        </button>
        <button 
          onClick={() => onDelete && onDelete(task._id)}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition"
        >
          <FaTrash size={14} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
