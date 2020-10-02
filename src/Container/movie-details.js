import React from 'react';
// import { Typography } from '@material-ui/core';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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

const MovieDetails = ({ match }) => {

  const filmID = match.params.id;
  const desiredStarship = localStorage.getItem('desiredStarship');
  const films = arrayToObject(JSON.parse(desiredStarship).filmConnection.films);
  console.log("allStarships", films);
  const desiredFilm = films[filmID];
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Paper className={classes.paper}>
        <Grid container spacing={2} className="films">
          <h1>{desiredFilm.title}</h1>
          <div >
            <Grid container >
              <Grid item xs>
                <p  >{desiredFilm.releaseDate}</p>
                <p  >{desiredFilm.title}</p>
                <p  >{desiredFilm.director}</p>
                <p  >{desiredFilm.producers}</p>
                <p  >{desiredFilm.openingCrawl}</p>
                <p  >{desiredFilm.created}</p>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Paper>

    </div>
  );
}

export default MovieDetails;