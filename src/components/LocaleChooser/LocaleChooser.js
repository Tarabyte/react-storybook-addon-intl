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
    width: '100%',
    borderBottom: '1px solid #ddd'
  },
  item: {
    display: 'inline-block',
    width: '5em',
    paddingTop: '1em',
    paddingLeft: '1em',
    paddingRight: '1em',
    paddingBottom: '0.5em',
    textAlign: 'center',
    cursor: 'pointer',
    marginBottom: '-1px',
    color: 'rgb(68, 68, 68)'
  },
  active: {
    fontWeight: 'bold',
    border: '1px solid #ddd',
    borderTop: '2px solid orange',
    borderBottom: '1px solid #fff'
  }
};

const LocaleChooser = ({ locales, locale, onChoose }) => {
  const itemActive = { ...styles.item, ...styles.active };
  const itemDefault = { ...styles.item };


  return (
    <ul style={styles.list}>
      {
        locales.map(option => (
          <li
            key={option}
            onClick={() => onChoose(option)}
            style={option === locale ? itemActive : itemDefault}
          >
            {option === locale ? '✔' : null}
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
