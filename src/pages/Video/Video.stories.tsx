import type { Meta, StoryFn } from '@storybook/react';

import { Video } from './Video';

const meta = {
  component: Video,
  title: 'Pages/Video',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Video>;

export default meta;

export const Template: StoryFn<typeof Video> = (args) => <Video {...args} />;
