import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {REGION} from '../components/ui/REGION';
import DashNew from "./dashnew";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 150
    },
    root:{
        flexGrow: 1,
    },
    paper:{
        height: 400,
        padding: theme.spacing(2)
    },
}))

export default function Oneview() {
    const classes = useStyles();

    // const x = "last updated on: " + document.lastModified;


    const [ub, setub] = useState(true);

    const [auto, setauto] = useState(300000);

    const handleChange = e => {
      setub(e.target.value)
    };

    let h1tag = REGION.filter(function(region) {
        return region.ub == ub
    }
  );

  let newarr = h1tag.map(a => a.site);

    const regionOptions = (
        <Select
        labelId="region-label"
        value={ub}
        onChange={handleChange}
        >
            {REGION.map(record => (
              <MenuItem value={record.ub}>
              {record.site}
              </MenuItem>
            ))}
        </Select>
    );

    return (
            <div className={classes.root}>
              <Grid container spacing={3} direction="row">
                <Grid container xs={12} sm={4}></Grid>
                <Grid container justify="center" alignItems="center" xs={12} sm={4}>
                   <Grid item>
                    <h1>{newarr}</h1>
                   </Grid>
                  </Grid>
                <Grid container xs={12} sm={4}>
                      <FormControl className={classes.formControl}>
                          <InputLabel id="region-label">Select Region</InputLabel>
                          { regionOptions }
                      </FormControl>
                      <FormControl className={classes.formControl}>
                          <InputLabel id="refresh-label">Auto Refresh</InputLabel>
                          <Select
                          labelId="refresh-label"
                          value={auto}
                          onChange={e => setauto(e.target.value)}
                          >
                              <MenuItem value={30000}>30 Seconds</MenuItem>
                              <MenuItem value={60000}>1 Minute</MenuItem>
                              <MenuItem value={120000}>2 Minutes</MenuItem>
                              <MenuItem value={180000}>3 Minutes</MenuItem>
                              <MenuItem value={240000}>4 Minutes</MenuItem>
                              <MenuItem value={300000}>5 Minutes</MenuItem>
                          </Select>
                      </FormControl>
                  </Grid>
                  </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                      <Paper className={classes.paper}>
                         <DashNew
                         arr1={newarr}
                         />
                      </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }

