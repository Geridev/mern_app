import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (servers = [], action) => {
  switch (action.type) {
    case DELETE:
      return servers.filter((server) => server._id !== action.payload);
    case UPDATE:
      return servers.map((server) =>
        server._id === action.payload._id ? action.payload : server
      );
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...servers, action.payload];
    default:
      return servers;
  }
};
