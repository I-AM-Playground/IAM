import {
  ArrowLongRightIcon,
  EnvelopeIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import type { Meta, StoryFn } from '@storybook/react';
import { Button } from '.';
import { Icon } from '../Icon';

const meta = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: { text: 'Text' },
} as Meta<typeof Button>;

export default meta;

export const Template: StoryFn<typeof Button> = ({ ...args }) => (
  <Button {...args}>{args.text}</Button>
);

export const Next: StoryFn<typeof Button> = ({ ...args }) => (
  <Button className="w-[400px]" {...args}>
    로그인 하러 가기
    <Icon icon={ArrowLongRightIcon} className="ml-5 h-6 w-6 text-white" />
  </Button>
);

export const LoginKakao: StoryFn<typeof Button> = ({ ...args }) => (
  <Button className="bg-kakao-yellow px-8 text-black" {...args}>
    <Icon icon={UserIcon} className="m-4 h-[50px] w-[50px]" />
    <Button.Title>카카오 계정으로 로그인하기</Button.Title>
  </Button>
);

export const LoginGoogle: StoryFn<typeof Button> = ({ ...args }) => (
  <Button className="border border-red bg-white px-8 text-black" {...args}>
    <Icon icon={UserIcon} className="m-4 h-[50px] w-[50px]" />
    <Button.Title>구글 계정으로 로그인하기</Button.Title>
  </Button>
);

export const LoginEmail: StoryFn<typeof Button> = ({ ...args }) => (
  <Button className="bg-red px-8" {...args}>
    <Icon icon={EnvelopeIcon} className="m-4 h-[50px] w-[50px] text-white" />
    <Button.Title>이메일로 로그인하기</Button.Title>
  </Button>
);
