import { api, getErrorMessage } from "./api";

function authConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export async function fetchTasks(token) {
  try {
    const response = await api.get("/kanban", authConfig(token));
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function createTask(task, token) {
  try {
    const response = await api.post("/kanban", task, authConfig(token));
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function updateTask(id, task, token) {
  const response = await api.put(`/kanban/${id}`, task, authConfig(token));
  return response.data;
}

export async function deleteTask(id, token) {
  const response = await api.delete(`/kanban/${id}`, authConfig(token));
  return response.data;
}
