import React, { useEffect, useState } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import { Paper } from '@material-ui/core';
import Starship from '../Components/starship';
import axios from 'axios';
import useStickyState from '../local-storage';
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
    maxWidth: 1400,
    background: "grey"
  },
  gridList: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px'
  }
}));


const StarshipList = () => {
  const [data, setData] = useStickyState({}, "allStarships")
  const [loading, setLoading] = useState(true);
  const query = `{
    allStarships{
      starships {
        id
        name
        filmConnection {
          films {
            id
            title
            releaseDate
            director
            producers
            openingCrawl
            created
            }
        
    
          }
        
        
        pilotConnection {
          pilots {
            id
            name
              birthYear
              gender
            species {
              skinColors
              hairColors
              
            }
            mass
            height
            }
          }
          
        }
      }
    }
    
  `;
  const uri = `https://starships-hyre.herokuapp.com/?query=${query}`;
  useEffect(() => {
    axios.get(uri)
      .then(result => {
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
                  id={starship.id}
                  films={starship.filmConnection}
                  pilots={starship.pilotConnection}
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