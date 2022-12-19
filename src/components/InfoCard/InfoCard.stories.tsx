import { FilmIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryFn } from '@storybook/react';
import { Frame } from '../Frame';
import { Icon } from '../Icon';
import { InfoCard } from './InfoCard';

const meta = {
  component: InfoCard,
  title: 'Components/InfoCard',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: {
    title: 'Title',
    subtitle: 'Sub Title',
    place: '블루스퀘어 신한카드홀',
    date: '2022.12.19 ~ 2023.01.24',
  },
} as Meta<typeof InfoCard>;

export default meta;

export const Video: StoryFn<typeof InfoCard> = ({ ...args }) => (
  <InfoCard className="h-[253px] w-[385px]" {...args}>
    <Frame>
      <Icon icon={FilmIcon} className="h-20 w-20 text-white" />
    </Frame>
    <InfoCard.Title>{args.title}</InfoCard.Title>
    <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
  </InfoCard>
);

export const Poster: StoryFn<typeof InfoCard> = ({ ...args }) => (
  <InfoCard className="h-[380px] w-[285px]" {...args}>
    <Frame />
    <InfoCard.Title>{args.title}</InfoCard.Title>
    <InfoCard.SubTitle>{args.date}</InfoCard.SubTitle>
    <InfoCard.SubTitle>{args.place}</InfoCard.SubTitle>
  </InfoCard>
);

export const Magazine: StoryFn<typeof InfoCard> = ({ ...args }) => (
  <InfoCard className="h-[360px] w-[589px]" {...args}>
    <Frame />
    <InfoCard.Title>{args.title}</InfoCard.Title>
    <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
  </InfoCard>
);
