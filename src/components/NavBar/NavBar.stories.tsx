import type { Meta, StoryFn } from '@storybook/react';
import { IconButton } from '../IconButton';
import { NavBar } from './NavBar';
import {
  FilmIcon,
  HomeIcon,
  MusicalNoteIcon,
  NewspaperIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';
import { twMerge as tw } from 'tailwind-merge';

const meta = {
  component: NavBar,
  title: 'Components/NavBar',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: { isActive: true },
} as Meta<typeof NavBar>;

export default meta;

export const Template: StoryFn<typeof NavBar> = ({ isActive, ...args }) => (
  <NavBar {...args}>
    <IconButton className="flex-col items-center justify-center">
      <IconButton.Icon
        icon={HomeIcon}
        className={tw('h-10 w-10', isActive ? 'text-red' : '')}
      />
      <IconButton.Title className={isActive ? 'text-red' : ''}>
        Home
      </IconButton.Title>
    </IconButton>
    <IconButton className="flex-col items-center justify-center">
      <IconButton.Icon icon={MusicalNoteIcon} className="h-10 w-10" />
      <IconButton.Title>음원(넘버)</IconButton.Title>
    </IconButton>
    <IconButton className="flex-col items-center justify-center">
      <IconButton.Icon icon={FilmIcon} className="h-10 w-10" />
      <IconButton.Title>영상</IconButton.Title>
    </IconButton>
    <IconButton className="flex-col items-center justify-center">
      <IconButton.Icon icon={TicketIcon} className="h-10 w-10" />
      <IconButton.Title>공연정보</IconButton.Title>
    </IconButton>
    <IconButton className="flex-col items-center justify-center">
      <IconButton.Icon icon={NewspaperIcon} className="h-10 w-10" />
      <IconButton.Title>매거진</IconButton.Title>
    </IconButton>
  </NavBar>
);
