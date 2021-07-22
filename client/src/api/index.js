import axios from "axios";

const url = "http://localhost:5000/servers";

export const fecthServers = () => axios.get(url);
export const createServer = (newServer) => axios.post(url, newServer);
