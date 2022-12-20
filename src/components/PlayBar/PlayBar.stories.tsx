import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import {
  BackwardIcon,
  ForwardIcon,
  ListBulletIcon,
  PlayIcon,
} from '@heroicons/react/24/solid';
import type { Meta, StoryFn } from '@storybook/react';
import { Frame } from '../Frame';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { PlayNav } from '../PlayNav';
import { SongItem } from '../SongItem';
import { PlayBar } from './PlayBar';

const meta = {
  component: PlayBar,
  title: 'Components/PlayBar',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: { title: 'Title', singer: 'Singer' },
} as Meta<typeof PlayBar>;

export default meta;

export const PC: StoryFn<typeof PlayBar> = (args) => (
  <PlayBar {...args}>
    <SongItem>
      <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
        <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
      </Frame>
      <SongItem.Info>
        <SongItem.Title>{args.title}</SongItem.Title>
        <SongItem.Singer>{args.singer}</SongItem.Singer>
      </SongItem.Info>
    </SongItem>
    <PlayNav className="absolute left-1/2 -translate-x-1/2">
      <IconButton className="h-20 w-20">
        <IconButton.Icon icon={BackwardIcon} className="h-10 w-10 text-white" />
      </IconButton>
      <IconButton className="h-20 w-20">
        <IconButton.Icon icon={PlayIcon} className="h-10 w-10 text-red" />
      </IconButton>
      <IconButton className="h-20 w-20">
        <IconButton.Icon icon={ForwardIcon} className="h-10 w-10 text-white" />
      </IconButton>
    </PlayNav>
    <IconButton>
      <IconButton.Icon icon={ListBulletIcon} className="h-10 w-10 text-white" />
    </IconButton>
  </PlayBar>
);

export const Mobile: StoryFn<typeof PlayBar> = (args) => (
  <PlayBar className="h-20 px-8" {...args}>
    <SongItem>
      <Frame className="mr-4 h-[60px] w-[60px] border border-dark-gray bg-white">
        <Icon icon={MusicalNoteIcon} className="h-8 w-8" />
      </Frame>
      <SongItem.Info>
        <SongItem.Title className="text-sm text-white">
          {args.title}
        </SongItem.Title>
        <SongItem.Singer className="text-xs">{args.singer}</SongItem.Singer>
      </SongItem.Info>
    </SongItem>
    <PlayNav>
      <IconButton className="h-[60px] w-[60px]">
        <IconButton.Icon icon={PlayIcon} className="h-10 w-10 text-red" />
      </IconButton>
      <IconButton className="h-[60px] w-[60px]">
        <IconButton.Icon icon={ForwardIcon} className="h-10 w-10 text-white" />
      </IconButton>
      <IconButton className="h-[60px] w-[60px]">
        <IconButton.Icon
          icon={ListBulletIcon}
          className="h-10 w-10 text-white"
        />
      </IconButton>
    </PlayNav>
  </PlayBar>
);
