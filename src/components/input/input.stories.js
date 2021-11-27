import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Input } from './';

export default {
  title: 'Input',
  component: Input,
  decorator: [withKnobs],
};

export const Search = () => (
  <Input
    search
    label={null}
    name="search"
    type="text"
    placeholder="What do you want to watch?"
    onChange={null}
  />
);

export const PopupForm = () => (
  <Input
    label="Movie id"
    name="id"
    type="text"
    onChange={null}
    autoComplete="off"
    placeholder="Movie id"
    disabled
  />
);

export const InputWithKnobs = () => {
  return (
    <Input
      search
      label={null}
      name="search"
      type="text"
      placeholder={text('placeholder', 'Custom Placeholder')}
      onChange={null}
    />
  );
};
