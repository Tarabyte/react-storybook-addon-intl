import React, { PropTypes } from 'react';
import { FormattedDate } from 'react-intl';

const Label = ({ date }) => (
  <label>
    <FormattedDate value={date} format="medium" />
  </label>
);

Label.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired
};

export default Label;
