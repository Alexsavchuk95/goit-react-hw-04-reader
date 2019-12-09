import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const Counter = ({ value, pages }) => (
  <>
    <p className={styles.counter}>
      {value}/{pages}
    </p>
  </>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
};

export default Counter;
