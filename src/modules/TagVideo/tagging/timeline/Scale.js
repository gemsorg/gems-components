import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getTicks } from '../utils/scales';
import { timeToPx } from '../utils/timeline';

import styles from './Scale.module.styl';

const Tick = ({ tick, left }) => (
  <div className={styles.tick} style={{ left }}>
    {tick.time}
  </div>
);

Tick.propTypes = {
  left: PropTypes.number.isRequired,
  tick: PropTypes.object.isRequired, // eslint-disable-line
};

export default class Scale extends Component {
  static propTypes = {
    width: PropTypes.number,
    duration: PropTypes.number,
    ready: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    duration: 0,
    width: 0,
  };

  render() {
    const { ready, width, duration } = this.props;
    if (!ready || !duration || !width) {
      return null;
    }
    const ticks = getTicks(0, duration, width, 50);
    return (
      <div className={styles.container}>
        {ticks.map(tick => (
          <Tick
            key={tick.tick}
            tick={tick}
            left={timeToPx(tick.tick, duration, width)}
          />
        ))}
      </div>
    );
  }
}
