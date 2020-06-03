import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: "40px 30px 40px 100px",
    width: "350px",
    height: "200px",
    backgroundColor: "#D1D9E0"
    },
    root: {
      width: "350px",
      height: "200px"
      },
    heading: {
      margin: "100px",
      padding: "10px"
    },
    text: {
      backgroundColor: "#E44100"
    },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
      <React.Fragment>
      <Grid container direction="row" justify="space-evenly" alignItems="center" spacing={5}>
      <Paper elevation={4} className={classes.paper}>
       <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={5}>
        <Grid Item>
         <Typography className={classes.text}>
           Port info
        </Typography>
        </Grid>
        <Grid item>
        <Button color={'primary'} variant="contained" component={Link} to="/simple table">
         Find Out More
        </Button>
        </Grid>
        </Grid>
      </Paper>
      <Paper elevation={4} className={classes.paper}>
       <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={5}>
        <Grid Item>
         <Typography className={classes.text}>
           Region info
        </Typography>
        </Grid>
        <Grid item>
        <Button color={'primary'} variant="contained" component={Link} to="/simple table">
         Find Out More
        </Button>
        </Grid>
        </Grid>
      </Paper>
      <Paper elevation={4} className={classes.paper}>
       <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={5}>
        <Grid Item>
         <Typography className={classes.text}>
           Job info
        </Typography>
        </Grid>
        <Grid item>
        <Button color={'primary'} variant="contained" component={Link} to="/simple table">
         Find Out More
        </Button>
        </Grid>
        </Grid>
      </Paper>
      <Paper elevation={4} className={classes.paper}>
       <Grid container direction="column" justify="space-evenly" alignItems="center" spacing={5}>
        <Grid Item>
         <Typography className={classes.text}>
           Placeholder info
        </Typography>
        </Grid>
        <Grid item>
        <Button color={'primary'} variant="contained" component={Link} to="/simple table">
         Find Out More
        </Button>
        </Grid>
        </Grid>
      </Paper>
      </Grid>
      </React.Fragment>
  );
}
