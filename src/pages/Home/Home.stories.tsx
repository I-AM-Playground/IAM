import type { Meta, StoryFn } from '@storybook/react';

import { Home } from './Home';

const meta = {
  component: Home,
  title: 'Pages/Home',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Home>;

export default meta;

export const Template: StoryFn<typeof Home> = (args) => <Home {...args} />;
