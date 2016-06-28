import React, { PropTypes } from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  caption: {
    id: 'button.caption',
    defaultMessage: 'Click Me (en - default)'
  }
});

const Button = ({ action }) => (
  <button type="button" onClick={action}>
    <FormattedMessage {...messages.caption} />
  </button>
);

Button.propTypes = {
  action: PropTypes.func
};

export default Button;
