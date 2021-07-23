import react from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Server from "./Server/Server";

import useStyles from "./styles";

const Servers = ({ setCurrentId }) => {
  const servers = useSelector((state) => state.servers);
  const classes = useStyles();

  console.log(servers);

  return !servers.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {servers.map((server) => (
        <Grid key={server._id} item xs={12} sm={6}>
          <Server server={server} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Servers;
