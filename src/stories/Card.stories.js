import React from 'react';
import Card from '../components/Card';
import deck02 from '../deck02.png';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    status: { 
      control: { type: 'select' },
      options: [ 'basic', 'success', 'warning', 'danger' ],
    }
  },
};

const Template = (args) => <Card {...args} />;

export const FileCard = Template.bind({});
FileCard.args = {
  imageUrl: deck02,
};