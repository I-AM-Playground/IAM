import type { Meta, StoryFn } from '@storybook/react';

import { Input } from './Input';

const meta = {
  component: Input,
  title: 'Components/Input',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: { isActive: true },
} as Meta<typeof Input>;

export default meta;

export const Default: StoryFn<typeof Input> = ({ isActive, ...args }) => (
  <Input {...args} className={isActive ? 'border-2 border-red' : ''} />
);
