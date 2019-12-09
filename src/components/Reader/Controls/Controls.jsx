import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const Controls = ({ handleChange, disabledPage, disabledPageLast }) => (
  <section className={styles.controls}>
    <button
      type="button"
      name="prev"
      className={styles.button}
      onClick={handleChange}
      disabled={disabledPage}
    >
      Назад
    </button>
    <button
      type="button"
      name="next"
      className={styles.button}
      onClick={handleChange}
      disabled={disabledPageLast}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  disabledPage: PropTypes.bool.isRequired,
  disabledPageLast: PropTypes.bool.isRequired,
};

export default Controls;
