import type { Meta, StoryFn } from '@storybook/react';

import { GetReady } from './GetReady';

const meta = {
  component: GetReady,
  title: 'Pages/GetReady',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof GetReady>;

export default meta;

export const Template: StoryFn<typeof GetReady> = (args) => (
  <GetReady {...args} />
);
