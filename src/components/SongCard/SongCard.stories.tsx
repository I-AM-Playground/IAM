import {
  EllipsisHorizontalIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline';
import type { Meta, StoryFn } from '@storybook/react';
import { Frame } from '../Frame';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { SongItem } from '../SongItem';
import { SongCard } from './SongCard';

const meta = {
  component: SongCard,
  title: 'Components/SongCard',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: { title: 'Title', singer: 'Singer' },
} as Meta<typeof SongCard>;

export default meta;

export const Template: StoryFn<typeof SongCard> = (args) => (
  <SongCard {...args}>
    <SongItem className="flex items-center" {...args}>
      <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
        <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
      </Frame>
      <SongItem.Info>
        <SongItem.Title>{args.title}</SongItem.Title>
        <SongItem.Singer>{args.singer}</SongItem.Singer>
      </SongItem.Info>
    </SongItem>
    <IconButton className="h-10 w-10">
      <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
    </IconButton>
  </SongCard>
);
