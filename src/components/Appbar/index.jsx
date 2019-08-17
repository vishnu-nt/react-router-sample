import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../../assets/images/logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    '& > header': {
      backgroundColor: '#333e50'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={Logo} alt="baskat" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
