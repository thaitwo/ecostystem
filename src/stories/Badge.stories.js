import React from 'react';

import Badge from '../components/Badge';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    status: { 
      control: { type: 'select' },
      options: [ 'basic', 'success', 'warning', 'danger' ],
    },
    appearance: { 
      control: { type: 'select' },
      options: [ 'filled', 'outline', 'ghost' ],
    },
    size: {
      control: { type: 'select' },
      options: [ 'large', 'medium', 'small' ],
    }
  },
};

const Template = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  status: 'basic',
  appearance: 'filled',
  label: 'Basic'
};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  appearance: 'filled',
  label: 'Success'
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
  appearance: 'filled',
  label: 'Warning'
};

export const Danger = Template.bind({});
Danger.args = {
  status: 'danger',
  appearance: 'filled',
  label: 'Danger'
};