import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { ResponsePropType } from '../../utils/types';
import { formatKeyString } from '../../utils';

const useStyles = makeStyles({
  specContent: {
    width: '100%'
  },
  tableWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  media: {
    height: 300,
    backgroundSize: 'contain',
  },
  actionArea: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    }
  }
});

export default function ProductDetail({ models, match }) {

  const [selectedCar, setSelectedCar] = useState({});

  useEffect(() => {
    const { model, car } = match.params;
    if (models[model]) {
      setSelectedCar(models[model][car] || []);
    }
  }, [match.params, models]);

  const classes = useStyles();
  const { logo, make, price, ...spec } = selectedCar;
  return (
    <Container>
      <Card className={classes.card}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.media}
            image={logo}
            title={make}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className="capitalize">
              {make}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: {price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <CardContent className={classes.specContent}>
            Specifications
            <div className={classes.tableWrapper}>
              <Table className={classes.table}>
                <TableBody>
                  {Object.keys(spec).slice(0, 10).map(key => (
                    <TableRow key={key}>
                      <TableCell className="capitalize">{formatKeyString(key)}</TableCell>
                      <TableCell className="capitalize">{spec[key]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <span className="divider"></span>
              <Table className={classes.table}>
                <TableBody>
                  {Object.keys(spec).slice(10).map(key => (
                    <TableRow key={key}>
                      <TableCell className="capitalize">{formatKeyString(key)}</TableCell>
                      <TableCell className="capitalize">{spec[key]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </CardActions>
      </Card>
    </Container>
  );
}

ProductDetail.propTypes = {
  models: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(ResponsePropType),
  }),
  match: ReactRouterPropTypes.match.isRequired,
};
