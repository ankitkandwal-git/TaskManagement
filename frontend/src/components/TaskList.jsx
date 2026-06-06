import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  return (
    <div className="space-y-3 max-h-96 overflow-y-auto">
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No tasks found. Create one to get started!</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
