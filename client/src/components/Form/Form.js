import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createServer, updateServer } from "../../actions/servers";

const Form = ({ currentId, setCurrentId }) => {
  const [serverData, setServerData] = useState({
    title: "",
    ip: "",
    port: "",
    game: "",
    description: "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  const server = useSelector((state) =>
    currentId ? state.servers.find((server) => server._id === currentId) : null
  );

  useEffect(() => {
    if (server) setServerData(server);
  }, [server]);

  const clear = () => {
    setCurrentId(0);
    setServerData({
      title: "",
      ip: "",
      port: "",
      game: "",
      description: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId !== 0) {
      dispatch(updateServer(currentId, serverData));
      clear();
    } else {
      dispatch(createServer(serverData));
      clear();
    }
  };

  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          Szerver {currentId ? "szerkesztés" : "készítés"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Név"
          fullWidth
          value={serverData.title}
          onChange={(e) =>
            setServerData({ ...serverData, title: e.target.value })
          }
        />
        <TextField
          name="ip"
          variant="outlined"
          label="Ip"
          fullWidth
          value={serverData.ip}
          onChange={(e) => setServerData({ ...serverData, ip: e.target.value })}
        />
        <TextField
          name="port"
          variant="outlined"
          label="Port"
          fullWidth
          value={serverData.port}
          onChange={(e) =>
            setServerData({ ...serverData, port: e.target.value })
          }
        />
        <TextField
          name="game"
          variant="outlined"
          label="Játék"
          fullWidth
          value={serverData.game}
          onChange={(e) =>
            setServerData({ ...serverData, game: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Leírás"
          fullWidth
          value={serverData.description}
          onChange={(e) =>
            setServerData({ ...serverData, description: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          hozzáadása
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
