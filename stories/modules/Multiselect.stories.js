import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';
import readme from './docs/Multiselect.md';

const form = {
  modules: [
    {
      name: 'description',
      type: 'description',
      content: 'Select few elements',
    },
    {
      name: 'multiselect',
      type: 'multiselect',
      options: [
        { id: 'A', caption: 'Option 1' },
        { id: 'b', caption: 'Option 2' },
        { id: '3', caption: 'Option 2' },
        { id: 'IV', caption: 'Option 4' },
      ],
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Multiselect', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
