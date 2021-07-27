import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fecthServers = () => API.get("/servers");
export const createServer = (newServer) => API.post("/servers", newServer);
export const updateServer = (id, updatedServer) =>
  axios.patch(`/servers/${id}`, updatedServer);
export const deleteServer = (id) => API.delete(`/servers/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
