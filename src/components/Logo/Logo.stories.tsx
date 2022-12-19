import type { Meta, StoryFn } from '@storybook/react';

import { Logo } from './Logo';

const meta = {
  component: Logo,
  title: 'Components/Logo',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Logo>;

export default meta;

export const Template: StoryFn<typeof Logo> = (args) => (
  <Logo {...args}>
    <Logo.Title>IAM(In All Musical)</Logo.Title>
    <Logo.SubTitle>뮤지컬 통합 스트리밍 서비스</Logo.SubTitle>
  </Logo>
);
