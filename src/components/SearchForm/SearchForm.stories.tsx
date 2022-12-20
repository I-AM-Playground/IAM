import type { Meta, StoryFn } from '@storybook/react';
import { IconButton } from '../IconButton';
import { Input } from '../Input';
import { SearchForm } from './SearchForm';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const meta = {
  component: SearchForm,
  title: 'Components/SearchForm',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof SearchForm>;

export default meta;

export const PC: StoryFn<typeof SearchForm> = (args) => (
  <SearchForm className="relative" {...args}>
    <SearchForm.Label>
      <Input type="search" />
      <IconButton className="absolute right-5 top-1/2 -translate-y-1/2">
        <IconButton.Icon icon={MagnifyingGlassIcon} className="h-8 w-8" />
      </IconButton>
    </SearchForm.Label>
  </SearchForm>
);
