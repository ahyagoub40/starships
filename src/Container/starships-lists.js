import React, { useEffect, useState } from 'react';
import '../App.css';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { Paper } from '@material-ui/core';
import Starship from '../Components/starship';
// import { createApolloFetch } from 'apollo-fetch';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1200,
    background: "grey"
  },
  gridList: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px'
  }
}));


const StarshipList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = `{allStarships{starships{name}}}`;
  const uri = `http://localhost:57966/?query=${query}`;
  useEffect(() => {
    axios.get(uri)
      .then(result => {
        console.log(result.data.data);
        setData(result.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [uri]);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {
        !loading && (

          <Paper className={classes.paper}>
            <GridList cellHeight={180} className={classes.gridList} >
              {data.allStarships.starships.map((starship, index) => (
                <Starship
                  key={index}
                  name={starship.name}
                />
              ))

              }
            </GridList>
          </Paper >
        )
      }
    </div>
  )
}

export default StarshipList