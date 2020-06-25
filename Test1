import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from "@material-ui/core/styles";

const count = 0;

const styles = theme => ({
  root: {
    backgroundColor: "#dc004e"
  },
  formcntl: {
  minWidth: 150
},
 mstyle: {
  fontFamily: "Adobe Caslon Pro",
  fontWeight: "30px",
  color: "#dc004e",
  margin: theme.spacing(2)
 }
});


class DashNew extends React.Component {

  render() {
    const { classes } = this.props;

    var myVar = this.props.int2
    function increase() {
      var randomNumber = Math.floor(Math.random()*9) + 1;
      document.getElementById('head1').innerText = randomNumber;
      checkRandom(randomNumber,myVar)
    };

    function checkRandom(rn,mv) {
      if (rn === 8) {
        console.log("Game over");
      } else {
        console.log(rn);
        // setTimeout(increase().bind(this), mv);
        setTimeout(function () {
        increase();
         }, mv);
      }

    };
    return(
      <div>
        <h1 id="head1">Hi</h1>
        <button className={classes.root} type="button" onClick={increase}>Refresh me!</button>
        <h2>{this.props.int2}</h2>
        <FormControl className={classes.formcntl}>
            <InputLabel id="refresh-label">Auto Refresh</InputLabel>
            <Select
            labelId="refresh-label"
            value={30000}
            className={classes.root}
            >
                <MenuItem className={classes.mstyle} value={30000}>Refresh in 30 Seconds</MenuItem>
                <MenuItem className={classes.mstyle} value={5000}>Refresh in 5 Seconds</MenuItem>
                <MenuItem className={classes.mstyle} value={1000}>Refresh in 1 Seconds</MenuItem>
                <MenuItem className={classes.mstyle} value={2000}>Refresh in 2 Seconds</MenuItem>
                <MenuItem className={classes.mstyle} value={60000}>Refresh in 1 Minute</MenuItem>
                <MenuItem className={classes.mstyle} value={120000}>Refresh in 2 Minutes</MenuItem>
                <MenuItem className={classes.mstyle} value={180000}>Refresh in 3 Minutes</MenuItem>
                <MenuItem className={classes.mstyle} value={240000}>Refresh in 4 Minutes</MenuItem>
                <MenuItem className={classes.mstyle} value={300000}>Refresh in 5 Minutes</MenuItem>
            </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles)(DashNew);
