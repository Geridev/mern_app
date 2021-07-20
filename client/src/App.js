import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center"></Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid></Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
