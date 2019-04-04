import React, { Component } from 'react';

import { NotificationAnimated } from '@expandorg/components/app';

import { Module } from '../Module';
import { Form, formProps, FormDataProvider } from '../Form';

import moduleControls from '../../app/moduleControls';

import FileUploadServiceMock from './FileUploadServiceMock';

import styles from './ModulesPlayground.module.styl';

const services = new Map([['fileUpload', new FileUploadServiceMock()]]);

export default class ModulesPlayground extends Component {
  static propTypes = {
    form: formProps.isRequired,
  };

  state = {
    formData: {
      allowedRetries: 3,
      currentTry: 1,
    },
    notification: null,
  };

  handleSubmit = values => {
    alert(JSON.stringify(values, undefined, 2));
  };

  handleNotify = (type, message) => {
    this.setState({ notification: { type, message } });
  };

  render() {
    const { form } = this.props;
    const { formData, notification } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.panel}>
          <FormDataProvider formData={formData}>
            <Form
              controls={moduleControls}
              form={form}
              services={services}
              className={styles.form}
              onSubmit={this.handleSubmit}
              onNotify={this.handleNotify}
            >
              {moduleProps => <Module {...moduleProps} />}
            </Form>
          </FormDataProvider>
        </div>
        <NotificationAnimated
          notification={notification}
          onClear={() => this.setState({ notification: null })}
        />
      </div>
    );
  }
}