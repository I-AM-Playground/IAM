import type { Meta, StoryFn } from '@storybook/react';
import { NavItem } from '../NavItem';

import { NavList } from './NavList';

const meta = {
  component: NavList,
  title: 'Components/NavList',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: { isActive: true },
} as Meta<typeof NavList>;

export default meta;

export const Main: StoryFn<typeof NavList> = ({ isActive, ...args }) => (
  <NavList {...args}>
    <NavItem {...args} className={isActive ? 'text-red' : ''}>
      Home
    </NavItem>
    <NavItem>음원(넘버)</NavItem>
    <NavItem>영상</NavItem>
    <NavItem>공연정보</NavItem>
    <NavItem>매거진</NavItem>
  </NavList>
);

export const Login: StoryFn<typeof NavList> = (args) => (
  <NavList {...args}>
    <NavItem>로그인</NavItem>
  </NavList>
);

export const Etc: StoryFn<typeof NavList> = (args) => (
  <NavList {...args}>
    <NavItem>IAM 멤버쉽</NavItem>
    <NavItem>문의하기</NavItem>
  </NavList>
);
