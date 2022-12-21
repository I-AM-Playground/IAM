import type { Meta, StoryFn } from '@storybook/react';
import { IconButton } from '../IconButton';
import { InfoCard } from '../InfoCard';
import { Input } from '../Input';
import { SearchForm } from '../SearchForm';
import { Main } from './Main';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ContentsWrap } from '../ContentsWrap';
import { Frame } from '../Frame';

const meta = {
  component: Main,
  title: 'Components/Main',
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
} as Meta<typeof Main>;

export default meta;

export const Poster: StoryFn<typeof Main> = (args) => (
  <Main {...args}>
    <SearchForm className="relative mb-20">
      <SearchForm.Label>
        <Input type="search" />
        <IconButton className="absolute right-5 top-1/2 -translate-y-1/2">
          <IconButton.Icon icon={MagnifyingGlassIcon} className="h-8 w-8" />
        </IconButton>
      </SearchForm.Label>
    </SearchForm>
    <ContentsWrap>
      <InfoCard className="w-[calc((100%-60px)/4)]">
        <Frame className="h-[380px]" />
        <InfoCard.Title>{args.title}</InfoCard.Title>
        <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
      </InfoCard>
      <InfoCard className="w-[calc((100%-60px)/4)]">
        <Frame className="h-[380px]" />
        <InfoCard.Title>{args.title}</InfoCard.Title>
        <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
      </InfoCard>
      <InfoCard className="w-[calc((100%-60px)/4)]">
        <Frame className="h-[380px]" />
        <InfoCard.Title>{args.title}</InfoCard.Title>
        <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
      </InfoCard>
      <InfoCard className="w-[calc((100%-60px)/4)]">
        <Frame className="h-[380px]" />
        <InfoCard.Title>{args.title}</InfoCard.Title>
        <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
      </InfoCard>
      <InfoCard className="w-[calc((100%-60px)/4)]">
        <Frame className="h-[380px]" />
        <InfoCard.Title>{args.title}</InfoCard.Title>
        <InfoCard.SubTitle>{args.subtitle}</InfoCard.SubTitle>
      </InfoCard>
    </ContentsWrap>
  </Main>
);
