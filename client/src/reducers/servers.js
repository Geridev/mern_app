export default (servers = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...servers, action.payload];
    default:
      return servers;
  }
};
