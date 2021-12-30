import React from 'react';

import Modal from '../components/Modal';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [ 'small', 'medium', 'large' ],
    }
  },
};

const Template = (args) => <Modal {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  cta: 'Action',
  hasCancelBtn: true,
  hasExitIcon: true,
  status: 'basic',
};

// export const Success = Template.bind({});
// Success.args = {
//   status: 'success',
// };

// export const Warning = Template.bind({});
// Warning.args = {
//   status: 'warning',
// };

// export const Danger = Template.bind({});
// Danger.args = {
//   status: 'danger',
// };