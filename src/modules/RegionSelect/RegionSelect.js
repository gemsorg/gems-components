import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../Alignment';
import { ImageRegionSelect } from '../../components/RegionSelect';

import styles from './styles.module.styl';

export default class RegionSelect extends Component {
  static propTypes = {
    value: PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number,
    }),
    readOnly: PropTypes.bool,
    initial: PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number,
    }),
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    readOnly: false,
    initial: null,
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { image, readOnly, initial, value } = this.props;
    const rect = readOnly ? initial : value;
    return (
      <Alignment padding="small" justify="center">
        <ImageRegionSelect
          className={styles.region}
          src={image}
          value={rect}
          readOnly={readOnly}
          onChange={this.handleChange}
        />
      </Alignment>
    );
  }
}
