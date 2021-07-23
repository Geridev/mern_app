export default (servers = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...servers, action.payload];
    case "UPDATE":
      return servers.map((server) =>
        server._id === action.payload._id ? action.payload : server
      );
    default:
      return servers;
  }
};
