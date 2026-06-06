import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} from "../services/taskService";
import { FaHome, FaTasks, FaCog } from 'react-icons/fa';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  const loadTasks = async (currentPage = page, currentSearch = searchTerm) => {
    try {
      const response = await getTasks({
        page: currentPage,
        limit,
        search: currentSearch,
      });

      setTasks(response.data.data || []);
      setTotalTasks(response.data.meta?.total || 0);
      setTotalPages(response.data.meta?.pages || 1);
      setPage(response.data.meta?.page || currentPage);
    } catch (error) {
      console.error("Load tasks failed:", error);
    }
  };

  useEffect(() => {
    loadTasks(page, searchTerm);
  }, [page, searchTerm]);

  const stats = [
    { label: 'Total Tasks', value: totalTasks, bgColor: 'bg-blue-500' },
    { label: 'Completed', value: tasks.filter(t => t.status === 'completed').length, bgColor: 'bg-green-500' },
    { label: 'Pending', value: tasks.filter(t => t.status === 'pending').length, bgColor: 'bg-yellow-500' },
    { label: 'Due Today', value: 2, bgColor: 'bg-red-500' },
  ];

  const handleAddTask = async (newTask) => {
    try {
      await createTask(newTask);
      setPage(1);
      await loadTasks(1, searchTerm);
    } catch (error) {
      console.error("Create task failed:", error);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleUpdateTask = async (updatedData) => {
    try {
      if (!editingTask) return;
      await updateTask(editingTask._id, updatedData);
      setEditingTask(null);
      await loadTasks();
    } catch (error) {
      console.error("Update task failed:", error);
    }
  };

  const handleToggleTask = async (id) => {
    try {
      await toggleTaskStatus(id);
      await loadTasks(page, searchTerm);
    } catch (error) {
      console.error("Toggle task failed:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      await loadTasks(page, searchTerm);
    } catch (error) {
      console.error("Delete task failed:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg">
          <nav className="flex flex-col p-6 space-y-4">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition ${
                activeTab === 'dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FaHome size={20} />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('tasks')}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition ${
                activeTab === 'tasks'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FaTasks size={20} />
              My Tasks
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition ${
                activeTab === 'settings'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <FaCog size={20} />
              Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800">Welcome back, User!</h1>
              <p className="text-gray-600 mt-2">Here's what you need to know today</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className={`${stat.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <span className="text-white text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Main Dashboard Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Add/Edit Task Form */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    {editingTask ? 'Edit Task' : 'Add New Task'}
                  </h2>
                  <TaskForm 
                    onSubmit={editingTask ? handleUpdateTask : handleAddTask}
                    initialTask={editingTask}
                  />
                  {editingTask && (
                    <button
                      onClick={() => setEditingTask(null)}
                      className="w-full mt-3 bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded-lg transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>

              {/* Task List */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-800">Your Tasks</h2>
                      <p className="text-sm text-gray-500">Showing {tasks.length} of {totalTasks} task{totalTasks === 1 ? '' : 's'}</p>
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      placeholder="Search tasks by title or description"
                      className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <TaskList 
                    tasks={tasks}
                    onEdit={handleEditTask}
                    onDelete={handleDeleteTask}
                    onToggle={handleToggleTask}
                  />

                  {totalPages > 1 && (
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                      <div className="text-sm text-gray-600">Page {page} of {totalPages}</div>
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => handlePageChange(page - 1)}
                          disabled={page === 1}
                          className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Prev
                        </button>
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                          <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`px-3 py-2 rounded-lg text-sm ${pageNumber === page ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          >
                            {pageNumber}
                          </button>
                        ))}
                        <button
                          onClick={() => handlePageChange(page + 1)}
                          disabled={page === totalPages}
                          className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
