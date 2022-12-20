import type { Meta, StoryFn } from '@storybook/react';
import { Icon } from '../Icon';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

import { IconButton } from './IconButton';

const meta = {
  component: IconButton,
  title: 'components/IconButton',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof IconButton>;

export default meta;

export const Template: StoryFn<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
  </IconButton>
);
