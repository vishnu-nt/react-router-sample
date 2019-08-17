import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import ModelCard from './ModelCard';
import { ResponsePropType } from '../../utils/types';

const Models = ({ models, match }) => {
  const [selectedMake, setSelectedMake] = useState([]);

  useEffect(() => {
    const selModel = match.params.model;
    setSelectedMake(models[selModel] || []);
  }, [match.params, models]);

  return selectedMake.map((model, i) => <ModelCard item={model} key={i} idx={i} />)
}

Models.propTypes = {
  models: PropTypes.shape({
    [PropTypes.string]: PropTypes.arrayOf(ResponsePropType),
  }),
  match: ReactRouterPropTypes.match.isRequired,
}

export default Models
