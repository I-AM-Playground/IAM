import type { Meta, StoryFn } from '@storybook/react';

import { Show } from './Show';

const meta = {
  component: Show,
  title: 'Pages/Show',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Show>;

export default meta;

export const Template: StoryFn<typeof Show> = (args) => <Show {...args} />;
