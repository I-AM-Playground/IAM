import { ListBulletIcon } from '@heroicons/react/24/outline';
import { BackwardIcon, ForwardIcon, PlayIcon } from '@heroicons/react/24/solid';
import type { Meta, StoryFn } from '@storybook/react';
import { IconButton } from '../IconButton';
import { PlayNav } from './PlayNav';

const meta = {
  component: PlayNav,
  title: 'Components/PlayNav',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof PlayNav>;

export default meta;

export const PC: StoryFn<typeof PlayNav> = (args) => (
  <PlayNav {...args}>
    <IconButton className="h-20 w-20">
      <IconButton.Icon icon={BackwardIcon} className="h-10 w-10" />
    </IconButton>
    <IconButton className="h-20 w-20">
      <IconButton.Icon icon={PlayIcon} className="h-10 w-10 text-red" />
    </IconButton>
    <IconButton className="h-20 w-20">
      <IconButton.Icon icon={ForwardIcon} className="h-10 w-10" />
    </IconButton>
  </PlayNav>
);

export const Mobile: StoryFn<typeof PlayNav> = (args) => (
  <PlayNav {...args}>
    <IconButton className="h-20 w-20">
      <IconButton.Icon icon={PlayIcon} className="h-10 w-10 text-red" />
    </IconButton>
    <IconButton className="h-20 w-20">
      <IconButton.Icon icon={ForwardIcon} className="h-10 w-10" />
    </IconButton>
    <IconButton className="h-20 w-20">
      <IconButton.Icon icon={ListBulletIcon} className="h-10 w-10" />
    </IconButton>
  </PlayNav>
);
