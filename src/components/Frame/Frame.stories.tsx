import type { Meta, StoryFn } from '@storybook/react';

import { Frame } from './Frame';

const meta = {
  component: Frame,
  title: 'Components/Frame',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Frame>;

export default meta;

export const Template: StoryFn<typeof Frame> = (args) => <Frame {...args} />;
