import React from 'react';
import CardFile from '../components/CardFile';
import CardFolder from '../components/CardFolder';
import deck02 from '../deck02.png';

export default {
  title: 'Cards',
  component: CardFile,
  argTypes: {
    status: { 
      control: { type: 'select' },
      options: [ 'basic', 'success', 'warning', 'danger' ],
    }
  },
};

const Template = (args) => <CardFile {...args} />;
const TemplateFolder = (args) => <CardFolder {...args} />;

export const File = Template.bind({});
File.args = {
  imageUrl: deck02,
};

export const Folder = TemplateFolder.bind({});
Folder.args = {
  
};