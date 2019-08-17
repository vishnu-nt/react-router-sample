import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import './styles.css';
import { ResponsePropType } from '../../utils/types';
import { groupByModel } from '../../utils';
import ExpandableCard from '../../components/ExpandableCard';

const Home = ({ models }) => {
  const groupedModels = groupByModel(models);
  return (
    <div className="home">
      <Typography gutterBottom className="title" variant="subtitle1" component="h3">Browse by Make</Typography>
      <ExpandableCard title='Models' products={groupedModels} />
    </div>
  )
}

Home.propTypes = {
  models: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(ResponsePropType),
  })
}

export default Home
