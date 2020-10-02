import React from 'react';
import { Typography } from '@material-ui/core';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import arrayToObject from '../arrayToObject';
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

const StarshipDetails = ({ match }) => {

  const starshipID = match.params.id;
  const allStarships = localStorage.getItem('allStarships');
  const starships = arrayToObject(JSON.parse(allStarships).allStarships.starships);
  console.log("allStarships", starships);
  const desiredStarship = starships[starshipID];
  localStorage.setItem("desiredStarship", JSON.stringify(desiredStarship));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} >
          <h1>{desiredStarship.name}</h1>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2} className="films">
          <h1>Related Films</h1>
          <div >
            {
              desiredStarship.filmConnection.films.map((film, index) => (
                <Grid container key={index}>
                  <Link to={{
                    pathname: `/movie-details/${film.id}`,
                  }}>
                    <Typography  >{film.title}</Typography>
                  </Link>
                </Grid>
              ))
            }
          </div>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container spacing={2} className="films">
          <h1>Related Pilots</h1>
          <div >
            {
              desiredStarship.pilotConnection.pilots.map((pilot, index) => (
                <Grid container key={index}>
                  <Link to={{
                    pathname: `/pilot-details/${pilot.id}`,
                  }}>

                    <Typography >{pilot.title}</Typography>
                  </Link>
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