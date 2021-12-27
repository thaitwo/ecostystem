import React from 'react';

// import { Button } from './Button';
import Button from '../components/Button';

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
  label: 'Primary Button'
  // primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  // ...Primary.args,
  status: 'secondary',
  label: 'Secondary Button'
  // appearance: 'filled',
};

export const Success = Template.bind({});
Success.args = {
  status: 'success',
  label: 'Success Button'
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
