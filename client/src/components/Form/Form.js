import react, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createServer } from "../../actions/servers";

const Form = () => {
  const [serverData, setServerData] = useState({
    title: "",
    ip: "",
    port: "",
    game: "",
    description: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createServer(serverData));
  };
  const clear = () => {};
  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Server hozzáadása</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Név"
          fullWidth
          value={serverData.creator}
          onChange={(e) =>
            setServerData({ ...serverData, title: e.target.value })
          }
        />
        <TextField
          name="ip"
          variant="outlined"
          label="Ip"
          fullWidth
          value={serverData.creator}
          onChange={(e) => setServerData({ ...serverData, ip: e.target.value })}
        />
        <TextField
          name="port"
          variant="outlined"
          label="Port"
          fullWidth
          value={serverData.creator}
          onChange={(e) =>
            setServerData({ ...serverData, port: e.target.value })
          }
        />
        <TextField
          name="game"
          variant="outlined"
          label="Játék"
          fullWidth
          value={serverData.creator}
          onChange={(e) =>
            setServerData({ ...serverData, game: e.target.value })
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
          alma
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
