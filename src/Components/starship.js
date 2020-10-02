import React from 'react';
import StarshipPoster from './starship-poster';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { Link } from 'react-router-dom';

const Starship = ({ name, id, films, pilots }) => {
  return (
    <div>
      <Link to={{
        pathname: `/starship-details/${id}`,
        myCustomProps: { name, films, pilots }
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