import react from "react";
import { useSelector } from "react-redux";

import Server from "./Server/Server";

import useStyles from "./styles";

const Servers = () => {
  const servers = useSelector((state) => state.servers);
  const classes = useStyles();

  console.log(servers);

  return (
    <>
      <h1>Servers</h1>
      <Server />
      <Server />
    </>
  );
};

export default Servers;
