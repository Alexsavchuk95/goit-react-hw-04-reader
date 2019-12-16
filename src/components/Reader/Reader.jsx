import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';
import styles from './styles.module.css';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
    step: PropTypes.number,
  };

  static defaultProps = {
    step: 1,
  };

  getPageNum = () => Number(queryString.parse(this.props.location.search).item);

  handleSteps = e => {
    const { name } = e.target;
    this.props.history.push({
      ...this.props.location,
      search: `item=${
        name === 'next'
          ? this.getPageNum() + this.props.step
          : this.getPageNum() - this.props.step
      }`,
    });
  };

  render() {
    const { items, step } = this.props;
    const pageNumber = this.getPageNum();
    if (!pageNumber || pageNumber > items.length) {
      return <Redirect to="/reader?item=1" />;
    }
    const disabledPrev = pageNumber <= step;
    const disabledNext = pageNumber >= items.length;
    return (
      <div className={styles.reader}>
        <Controls
          handleChange={this.handleSteps}
          disabledPage={disabledPrev}
          disabledPageLast={disabledNext}
        />
        <Counter value={pageNumber} pages={items.length} />
        <Publication item={items[pageNumber - step]} />
      </div>
    );
  }
}
