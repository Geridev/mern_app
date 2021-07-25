import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../api";

export const getServers = () => async (dispatch) => {
  try {
    const { data } = await api.fecthServers();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createServer = (server) => async (dispatch) => {
  try {
    const { data } = await api.createServer(server);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateServer = (id, server) => async (dispatch) => {
  try {
    const { data } = await api.updateServer(id, server);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteServer = (id) => async (dispatch) => {
  try {
    await api.deleteServer(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
