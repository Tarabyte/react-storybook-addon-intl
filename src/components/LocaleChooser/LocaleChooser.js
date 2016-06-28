import React, { PropTypes } from 'react';

const styles = {
  list: {
    display: 'block',
    listStyleType: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    height: '20px',
    width: '100%',
    borderBottom: '1px solid #666'
  },
  item: {
    display: 'inline-block',
    width: '5em'
  },
  active: {
    fontWeight: 'bold'
  }
};

const LocaleChooser = ({ locales, locale, onChoose, defaultLocale = 'en' }) => {
  const itemActive = { ...styles.item, ...styles.active };
  const itemDefault = { ...styles.item };

  const options = [defaultLocale].concat(locales);


  return (
    <ul style={styles.list}>
      {
        options.map(option => (
          <li
            key={option}
            onClick={() => onChoose(option)}
            style={option === locale ? itemActive : itemDefault}
          >
            {option}
          </li>
        ))
      }
    </ul>
  );
};

LocaleChooser.propTypes = {
  locales: PropTypes.arrayOf(PropTypes.string).isRequired,
  locale: PropTypes.string,
  defaultLocale: PropTypes.string,
  onChoose: PropTypes.func.isRequired
};

export default LocaleChooser;
