import { api, getErrorMessage } from "./api";

export async function signIn(userData) {
  try {
    const response = await api.post("/user/login", userData);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function signUp(userData) {
  try {
    const response = await api.post("/user", userData);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export function getToken() {
 return localStorage.getItem("token");
}

export function getUser() {
 const userInfo = localStorage.getItem("userInfo");
 return userInfo ? JSON.parse(userInfo) : null;
}

export function logout() {
 localStorage.removeItem("token");
 localStorage.removeItem("userInfo");
}
