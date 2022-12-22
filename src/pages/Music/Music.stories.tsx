import type { Meta, StoryFn } from '@storybook/react';

import { Music } from './Music';

const meta = {
  component: Music,
  title: 'Pages/Music',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Music>;

export default meta;

export const Template: StoryFn<typeof Music> = (args) => <Music {...args} />;
