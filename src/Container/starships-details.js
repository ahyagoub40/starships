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

const StarshipDetails = ({ location }) => {

  const { films, pilots } = location.myCustomProps;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} className="films">
          <h1>Films</h1>
          <div >
            {
              films.films.map((film, index) => (
                <Grid container key={index}>
                  <p  >{film.title}</p>
                </Grid>
              ))
            }
          </div>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2} className="films">
          <h1>Pilots</h1>
          <div >
            {
              pilots.pilots.map((pilot, index) => (
                <Grid container key={index}>
                  <p >{pilot.title}</p>
                </Grid>
              ))
            }
          </div>
        </Grid>
      </Paper>
    </div>
  );
}

export default StarshipDetails