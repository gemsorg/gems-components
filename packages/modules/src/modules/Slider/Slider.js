import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';
import { Slider as UISlider } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Slider.module.styl';

export default function Slider({
  value,
  readOnly,
  initial,
  min,
  max,
  step,
  name,
  onChange,
}) {
  const change = useCallback(
    (val) => {
      onChange(name, val);
    },
    [name, onChange]
  );
  const val = readOnly ? initial : value;

  return (
    <div className={styles.contianer}>
      <UISlider
        className={styles.slider}
        value={+val}
        step={+step}
        min={+min}
        max={+max}
        onChange={change}
      />
      <div className={styles.value}>{val}</div>
    </div>
  );
}

Slider.module = {
  type: 'slider',
  name: 'Slider',
  isInput: true,
  validation: {
    isRequired: rules.isRequired,
  },
  editor: {
    category: ModuleCategories.Input,
    properties: {
      step: {
        type: PropControlTypes.number,
        placeholder: 'Step size (default 1)',
        required: true,
      },
      min: {
        type: PropControlTypes.number,
        placeholder: 'Min value  (default 0)',
      },
      max: {
        type: PropControlTypes.number,
        placeholder: 'Max value (default 100)',
      },
      readOnly: {
        type: PropControlTypes.boolean,
        label: 'Read only',
      },
      initial: {
        type: PropControlTypes.string,
        placeholder: 'Initial value',
      },
    },
    defaults: {
      min: 0,
      max: 10,
      step: 1,
      initial: 0,
    },
  },
};

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  readOnly: PropTypes.bool,
  initial: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  value: 0,
  initial: 0,
  readOnly: false,
  min: 0,
  max: 10,
  step: 1,
};
