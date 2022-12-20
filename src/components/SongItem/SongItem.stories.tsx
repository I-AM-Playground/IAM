import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryFn } from '@storybook/react';
import { Frame } from '../Frame';
import { Icon } from '../Icon';
import { SongItem } from './SongItem';

const meta = {
  component: SongItem,
  title: 'Components/SongItem',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: { title: 'Title', singer: 'Singer' },
} as Meta<typeof SongItem>;

export default meta;

export const Template: StoryFn<typeof SongItem> = ({ ...args }) => (
  <SongItem {...args}>
    <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
      <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
    </Frame>
    <SongItem.Info>
      <SongItem.Title>{args.title}</SongItem.Title>
      <SongItem.Singer>{args.singer}</SongItem.Singer>
    </SongItem.Info>
  </SongItem>
);
