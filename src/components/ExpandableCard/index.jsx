import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';

import ProductCard from '../ProductCard';

const useStyles = makeStyles(theme => ({
  card: {
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  productCard: {
    flexBasis: '23%',
    margin: '1%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    margin: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    borderRadius: 0
  },
  expandOpen: {
    display: 'none',
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ExpandableCard({ title, products }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        {products.slice(0, 8).map((product, i) => <ProductCard key={product.make + i} item={product} className={classes.productCard} />)}
      </CardContent>
      <CardActions disableSpacing>

        <Button
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          fullWidth
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="view all brands"
        >
          View all brands
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {products.slice(8).map((product, i) => <ProductCard key={product.make + i} item={product} />)}
        </CardContent>
      </Collapse>
    </Card>
  );
}

ExpandableCard.propTypes = {
  title: PropTypes.string.isRequired
}