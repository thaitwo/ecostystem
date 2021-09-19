import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    status: { 
      control: { type: 'select' },
      options: [ 'primary', 'secondary', 'success', 'warning', 'danger' ],
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

const Template = (args) => <Button {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  status: 'primary',
  appearance: 'filled',
  label: 'Button'
  // primary: true,
};

// export const Status = Template.bind({});
// Primary.args = {
//   status: 'primary',
//   label: 'Button',
// };

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  status: 'secondary',
  // appearance: 'filled',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
