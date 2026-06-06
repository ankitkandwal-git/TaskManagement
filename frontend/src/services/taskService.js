import api from "../utils/api";

export const getTasks = (params = {}) => {
  return api.get("/tasks", { params });
};

export const createTask = (taskData) => {
  return api.post("/tasks", taskData);
};

export const updateTask = (id, taskData) => {
  return api.put(`/tasks/${id}`, taskData);
};

export const toggleTaskStatus = (id) => {
  return api.patch(`/tasks/${id}/status`);
};

export const deleteTask = (id) => {
  return api.delete(`/tasks/${id}`);
};