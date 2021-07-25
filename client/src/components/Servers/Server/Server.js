import react from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { deleteServer } from "../../../actions/servers";

const Server = ({ server, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={server.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{server.ip}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(server._id)}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {server.port}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {server.game}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />1
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteServer(server._id))}
        >
          <DeleteIcon fontSize="small" /> Törlés
        </Button>
      </CardActions>
    </Card>
  );
};

export default Server;
