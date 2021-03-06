import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Button } from '@expandorg/components';
import { formProps } from '../Form';
import { getModuleControlsMap } from '../../model/modules';
import { getReasons } from '../../model/reportReasons';

import styles from './ReportToggle.module.styl';

export default class ReportToggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    controls: PropTypes.arrayOf(PropTypes.func), // eslint-disable-line
    form: formProps,
  };

  static defaultProps = {
    form: null,
    className: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      controls: getModuleControlsMap(props.controls),
      visible: false,
    };
  }

  handleToggle = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };

  render() {
    const { children, form, className } = this.props;
    const { controls } = this.state;

    if (!form || form.report === false) {
      return null;
    }

    const reasons = getReasons(form.modules, controls);

    const { visible } = this.state;
    return (
      <>
        <Button
          onClick={this.handleToggle}
          theme="link"
          className={cn(styles.toggle, className)}
        >
          report
        </Button>
        {visible && children({ reasons, onHide: this.handleToggle })}
      </>
    );
  }
}
