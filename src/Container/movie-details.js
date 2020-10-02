import React from 'react';
import { Typography } from '@material-ui/core';
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
                <Typography  >{desiredFilm.releaseDate}</Typography>
                <Typography  >{desiredFilm.title}</Typography>
                <Typography  >{desiredFilm.director}</Typography>
                <Typography  >{desiredFilm.Typographyroducers}</Typography>
                <Typography  >{desiredFilm.oTypographyeningCrawl}</Typography>
                <Typography  >{desiredFilm.created}</Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Paper>

    </div>
  );
}

export default MovieDetails;