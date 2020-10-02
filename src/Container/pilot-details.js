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

const PilotDetails = ({ match }) => {

  const pilotID = match.params.id;
  const desiredStarship = localStorage.getItem('desiredStarship');
  const pilots = arrayToObject(JSON.parse(desiredStarship).pilotConnection.pilots);
  const desiredPilot = pilots[pilotID];
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Paper className={classes.paper}>
        <Grid container spacing={2} className="films">
          <h1>{desiredPilot.name}</h1>
          <div >

            <Grid container>
              <Grid item xs>
                <Typography  >{desiredPilot.birthYear}</Typography>
                <Typography  >{desiredPilot.title}</Typography>
                <Typography  >{desiredPilot.gender}</Typography>
                <Typography  >{desiredPilot.species.skinColors}</Typography>
                <Typography  >{desiredPilot.species.hairColors}</Typography>
                <Typography  >{desiredPilot.mass}</Typography>
                <Typography  >{desiredPilot.height}</Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Paper>

    </div>
  );
}

export default PilotDetails