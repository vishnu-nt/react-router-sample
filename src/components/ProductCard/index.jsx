import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ResponsePropType } from '../../utils/types';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    display: 'inline-block',
    margin: '0 10px'
  },
  content: {
    padding: '16px 16px 0',
  }
});

export default function ProductCard({ item, className }) {
  const classes = useStyles();
  const { logo, make, numberOfCars } = item;
  return (
    <Card className={clsx(classes.card, className)} raised>
      <NavLink to={`/model/${make}`}>
        <Fragment>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={make}
              height="140"
              image={logo}
              title={make}
            />
            <CardContent className={classes.content}>
              <Typography variant="h5" component="h2" className="capitalize">
                {make}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {numberOfCars} cars
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" fullWidth>
              View All from {make}
            </Button>
          </CardActions>
        </Fragment>
      </NavLink>
    </Card >
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({ ...ResponsePropType, numberOfCars: PropTypes.number }).isRequired
};
