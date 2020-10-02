import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../Components/button';
import '../App.css';
import { useHistory } from 'react-router-dom';
export default function CustomAppBar() {
  const history = useHistory();
  return (
    <div>
      <div className="NavBar">
        <AppBar position="fixed" >
          <Toolbar className="ToolBar">
            <Button onClick={() => {
              history.push("/");
            }} >
              Starships App
              </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
