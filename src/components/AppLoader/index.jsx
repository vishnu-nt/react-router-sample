import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../../assets/images/logo.png';
import './styles.css';

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '#ffffff',
  },
  barColorPrimary: {
    backgroundColor: '#3ecccb',
  },
})(LinearProgress);

const AppLoader = () => {
  return (
    <div className="app-loader">
      <div>
        <img src={Logo} alt="baskat" />
        <ColorLinearProgress />
      </div>
    </div>
  )
}

export default AppLoader
