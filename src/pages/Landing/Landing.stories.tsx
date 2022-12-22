import type { Meta, StoryFn } from '@storybook/react';

import { Landing } from './Landing';

const meta = {
  component: Landing,
  title: 'Pages/Landing',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Landing>;

export default meta;

export const Template: StoryFn<typeof Landing> = (args) => (
  <Landing {...args} />
);
