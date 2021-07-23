export default (servers = [], action) => {
  switch (action.type) {
    case "UPDATE":
      return servers.map((server) =>
        server._id === action.payload._id ? action.payload : server
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...servers, action.payload];
    default:
      return servers;
  }
};
