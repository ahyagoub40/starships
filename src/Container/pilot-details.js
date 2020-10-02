import React from 'react';
// import { Typography } from '@material-ui/core';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
    marginBottom: 50,
    background: "grey"
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const PilotDetails = ({ location }) => {

  const { pilot } = location.myCustomProps;
  console.log("pilot", pilot);
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Paper className={classes.paper}>
        <Grid container spacing={2} className="films">
          <h1>{pilot.name}</h1>
          <div >

            <Grid container>
              <Grid item xs>
                <p  >{pilot.birthYear}</p>
                <p  >{pilot.title}</p>
                <p  >{pilot.gender}</p>
                <p  >{pilot.species.skinColors}</p>
                <p  >{pilot.species.hairColors}</p>
                <p  >{pilot.mass}</p>
                <p  >{pilot.height}</p>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Paper>

    </div>
  );
}

export default PilotDetails