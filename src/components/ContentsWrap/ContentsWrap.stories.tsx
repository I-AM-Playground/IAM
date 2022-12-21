import { FilmIcon } from '@heroicons/react/24/outline';
import type { Meta, StoryFn } from '@storybook/react';
import { Frame } from '../Frame';
import { Icon } from '../Icon';
import { InfoCard } from '../InfoCard';
import { ContentsWrap } from './ContentsWrap';

const meta = {
  component: ContentsWrap,
  title: 'Components/ContentsWrap',
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
} as Meta<typeof ContentsWrap>;

export default meta;

export const Video: StoryFn<typeof ContentsWrap> = ({ ...args }) => (
  <ContentsWrap {...args}>
    <InfoCard className="w-[calc((100%-40px)/3)]" {...args}>
      <Frame className="h-[253px]">
        <Icon icon={FilmIcon} className="h-20 w-20 text-white" />
      </Frame>
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-40px)/3)]" {...args}>
      <Frame className="h-[253px]">
        <Icon icon={FilmIcon} className="h-20 w-20 text-white" />
      </Frame>
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-40px)/3)]" {...args}>
      <Frame className="h-[253px]">
        <Icon icon={FilmIcon} className="h-20 w-20 text-white" />
      </Frame>
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-40px)/3)]" {...args}>
      <Frame className="h-[253px]">
        <Icon icon={FilmIcon} className="h-20 w-20 text-white" />
      </Frame>
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-40px)/3)]" {...args}>
      <Frame className="h-[253px]">
        <Icon icon={FilmIcon} className="h-20 w-20 text-white" />
      </Frame>
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
  </ContentsWrap>
);

export const Poster: StoryFn<typeof ContentsWrap> = ({ ...args }) => (
  <ContentsWrap {...args}>
    <InfoCard className="w-[calc((100%-60px)/4)]" {...args}>
      <Frame className="h-[380px]" />
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-60px)/4)]" {...args}>
      <Frame className="h-[380px]" />
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-60px)/4)]" {...args}>
      <Frame className="h-[380px]" />
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-60px)/4)]" {...args}>
      <Frame className="h-[380px]" />
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-60px)/4)]" {...args}>
      <Frame className="h-[380px]" />
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
  </ContentsWrap>
);

export const Magazine: StoryFn<typeof ContentsWrap> = ({ ...args }) => (
  <ContentsWrap {...args}>
    <InfoCard className="w-[calc((100%-20px)/2)]" {...args}>
      <Frame className="h-[360px]" />
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-20px)/2)]" {...args}>
      <Frame className="h-[360px]" />
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-20px)/2)]" {...args}>
      <Frame className="h-[360px]" />
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-20px)/2)]" {...args}>
      <Frame className="h-[360px]" />
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
    <InfoCard className="w-[calc((100%-20px)/2)]" {...args}>
      <Frame className="h-[360px]" />
      <InfoCard.Title>{args.title}</InfoCard.Title>
      <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
    </InfoCard>
  </ContentsWrap>
);
