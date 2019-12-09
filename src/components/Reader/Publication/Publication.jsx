import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';

const Publication = ({ item: { title, text } }) => (
  <article className={styles.publication}>
    <h2>{title}</h2>
    <p>{text}</p>
  </article>
);

Publication.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
