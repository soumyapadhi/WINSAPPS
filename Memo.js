import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import airplane from '../assets/send.svg'

const useStyles = makeStyles(theme => ({
  button: {
  borderRadius: "50px",
  marginLeft: "20px",
  marginRight: "25px"
}
}));

export default function Memo(){
  const classes = useStyles();
  const theme = useTheme();

  const [selectfile, setSelectfile] = useState('')
  const [mainid, setMainid] = useState('')
  const [pass, setPass] = useState('')
  const [env, setEnv] = useState('')


  return (
    <Grid container direction="row">
      <Grid item container direction="column" justify="center" alignItems="center" xs={12} sm={6} lg={4}>
        <Grid item>
         <Grid item container direction="column" justify="center" alignItems="center">
         <Grid item>
           <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize: "1.5rem" }}>
           Memo Delete Control Card Generator
           </Typography>
         </Grid>
         <Grid item container direction="column" justify="center" alignItems="left">
         <Grid item>
             <TextField label="Mainframe id" id="mainid" value={mainid}
              onChange={event => setMainid(event.target.value)}
             />
         </Grid>
         <Grid item>
             <TextField label="Password" id="pass" value={pass}
              onChange={event => setPass(event.target.value)}
             />
         </Grid>
         <Grid item>
             <TextField label="Environment" id="env" value={env}
              onChange={event => setEnv(event.target.value)}
             />
          </Grid>
          <Grid item>
            <TextField
              id="standard-read-only-input"
              style={{marginTop: "1em"}}
              defaultValue="Select File to upload"
              InputProps={{
              readOnly: true,
              }}
            />
             <input
             className={classes.input}
             style={{ display: 'none' }}
             id="round-button-file"
             multiple
             type="file"
             />
             <label htmlFor="round-button-file">
             <Button variant="contained" size="small" component="span" className={classes.button}
             style={{marginTop: "1em"}}
             >
             Upload File
             </Button>
             </label>
          </Grid>
         </Grid>
         <Grid item container justify="left" style={{marginTop: "2em"}}>
            <Button variant="contained">Submit
            <img src={airplane} alt="paper airplane" /></Button>
         </Grid>
         </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
