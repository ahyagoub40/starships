import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../Components/button';
import '../App.css';
export default function CustomAppBar() {
  return (
    <div>
      <div className="NavBar">
        <AppBar position="fixed" >
          <Toolbar className="ToolBar">
            <Button >
              Starships App
              </Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
