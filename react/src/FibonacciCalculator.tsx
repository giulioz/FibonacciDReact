import { TextField, Theme, Typography, withStyles } from "@material-ui/core";
import * as React from "react";

interface IProps {
  classes: any;
}

interface IState {
  currentValue: number;
  fibonacciValue: number | null;
}

const styles = (theme: Theme) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class FibonacciCalculator extends React.Component<IProps, IState> {
  public state = {
    currentValue: 1,
    fibonacciValue: null
  };

  public render() {
    const { classes } = this.props;
    const { currentValue, fibonacciValue } = this.state;

    return (
      <div className={classes.textField}>
        <TextField
          label="Number"
          value={currentValue}
          onChange={this.handleChange}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        {fibonacciValue && <Typography>Fibonacci: {fibonacciValue}</Typography>}
      </div>
    );
  }

  private handleChange = async (e: any) => {
    this.setState({
      currentValue: parseFloat(e.target.value),
      fibonacciValue: await this.fetchValue(parseFloat(e.target.value))
    });
  };

  private fetchValue = async (n: number) => {
    const req = await fetch(`/fib/${n}`);
    const result = await req.text();
    return parseFloat(result);
  };
}

export default withStyles(styles)(FibonacciCalculator);
