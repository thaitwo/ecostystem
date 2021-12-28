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
    size: {
      control: { type: 'select' },
      options: [ 'large', 'small' ],
    }
  },
};

const Template = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  status: 'basic',
};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  status: 'danger',
};