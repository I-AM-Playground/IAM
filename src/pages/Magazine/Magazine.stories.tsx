import type { Meta, StoryFn } from '@storybook/react';

import { Magazine } from './Magazine';

const meta = {
  component: Magazine,
  title: 'Pages/Magazine',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Magazine>;

export default meta;

export const Template: StoryFn<typeof Magazine> = (args) => (
  <Magazine {...args} />
);
