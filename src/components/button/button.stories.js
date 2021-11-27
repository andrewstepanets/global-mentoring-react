import * as React from 'react';
import { text, object, withKnobs } from '@storybook/addon-knobs';

import { Button } from './';

export default {
  title: 'Button',
  component: Button,
  decorator: [withKnobs],
};

const Template = (args) => <Button {...args} />;

export const Reset = Template.bind({});
Reset.args = {
  reset: true,
  type: 'reset',
  onClick: null,
  text: 'Reset',
};
export const Submit = Template.bind({});
Submit.args = {
  submit: true,
  type: 'submit',
  onClick: null,
  text: 'Submit',
};
export const Search = Template.bind({});
Search.args = {
  submit: true,
  type: 'button',
  onClick: null,
  text: 'Search',
};
export const Save = Template.bind({});
Save.args = {
  submit: true,
  type: 'button',
  onClick: null,
  text: 'Save',
};
export const Add = Template.bind({});
Add.args = {
  button: true,
  type: 'button',
  onClick: null,
  text: '+ Add Movie',
};

export const ButtonWithKnobs = () => {
  const defaultValue = {
    color: '#fff',
    border: 'none',
  };
  const value = object(`color`, defaultValue, `Styles`);

  return (
    <Button
      submit
      type="submit"
      onClick={null}
      text={text('text', 'Custom Button')}
      style={value}
    />
  );
};
