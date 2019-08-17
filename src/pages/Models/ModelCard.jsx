import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: '16px 0'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  content: {
    display: 'flex',
    flex: '1 0 auto',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  linkButton: {
    width: '100%',
    display: 'flex',
  },
}));

export default function MediaControlCard({ item, idx }) {
  const classes = useStyles();
  const { logo, make, price, fuel_type } = item;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={logo}
        title={make}
      />
      <div className={classes.details}>

        <CardContent className={classes.content}>
          <div>
            <Typography component="h5" variant="h5" className="capitalize">
              {make}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {fuel_type}
            </Typography>
          </div>
          <Typography variant="subtitle1" color="textSecondary">
            AED {price}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button fullWidth className={classes.button}>
            <Typography variant="subtitle1" color="textSecondary" className={classes.linkButton}>
              <NavLink to={`/model/${make}/${idx}`} className="button-link">
                View Specifications
            </NavLink>
            </Typography>
          </Button>
        </div>
      </div>

    </Card>
  );
}
