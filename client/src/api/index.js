import axios from "axios";

const url = "https://apihunszerver.herokuapp.com/servers";

export const fecthServers = () => axios.get(url);
export const createServer = (newServer) => axios.post(url, newServer);
export const updateServer = (id, updatedServer) =>
  axios.patch(`${url}/${id}`, updatedServer);
export const deleteServer = (id) => axios.delete(`${url}/${id}`);
