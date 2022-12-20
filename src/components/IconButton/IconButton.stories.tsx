import type { Meta, StoryFn } from '@storybook/react';
import { EllipsisHorizontalIcon, HomeIcon } from '@heroicons/react/24/outline';
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
  args: { title: 'Home' },
} as Meta<typeof IconButton>;

export default meta;

export const Template: StoryFn<typeof IconButton> = (args) => (
  <IconButton {...args}>
    <IconButton.Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
  </IconButton>
);

export const MobileNav: StoryFn<typeof IconButton> = ({ ...args }) => (
  <IconButton className="flex-col items-center justify-center" {...args}>
    <IconButton.Icon icon={HomeIcon} className="h-10 w-10" />
    <IconButton.Title>{args.title}</IconButton.Title>
  </IconButton>
);
