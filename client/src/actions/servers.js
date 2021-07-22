import * as api from "../api";

export const getServers = () => async (dispatch) => {
  try {
    const { data } = await api.fecthServers();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createServer = (server) => async (dispatch) => {
  try {
    const { data } = await api.createServer(server);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
