import { AppBar, CssBaseline, Toolbar, Typography } from "@material-ui/core";
import * as React from "react";
import FibonacciCalculator from "./FibonacciCalculator";

class App extends React.Component {
  public render() {
    return (
      <CssBaseline>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Fibonacci
              </Typography>
            </Toolbar>
          </AppBar>
          <FibonacciCalculator />
        </React.Fragment>
      </CssBaseline>
    );
  }
}

export default App;
