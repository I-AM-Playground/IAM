import type { Meta, StoryFn } from '@storybook/react';

import { Button } from '.';

const meta = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: { text: 'Text' },
} as Meta<typeof Button>;

export default meta;

export const Template: StoryFn<typeof Button> = ({ ...args }) => (
  <Button {...args}>{args.text}</Button>
);
