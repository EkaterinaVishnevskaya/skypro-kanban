import axios from "axios";

export const api = axios.create({
 baseURL: "https://wedev-api.sky.pro/api",
 headers: {
 "Content-Type": "",
 },
});

export function getErrorMessage(error) {
 return error.response?.data?.error || error.response?.data?.message || error.message || "Произошла ошибка. Попробуйте ещё раз.";
}