import React from 'react';
import StarshipPoster from './starship-poster';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from 'react-router-dom';
import "../App.css";
const Starship = ({ name, id, films, pilots }) => {
  return (
    <div className="poster-grid">
      <Link to={{
        pathname: `/starship-details/${id}`,
      }}>

        <GridListTile >
          <StarshipPoster poster={name} />
          <GridListTileBar
            title={name}
          />
        </GridListTile>
      </Link>
    </div>
  )
};

export default Starship;