import type { Meta, StoryFn } from '@storybook/react';
import { Logo } from '../Logo';
import { NavItem } from '../NavItem';
import { NavList } from '../NavList';
import { SideNav } from './SideNav';

const meta = {
  component: SideNav,
  title: 'Components/SideNav',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: { isActive: true },
} as Meta<typeof SideNav>;

export default meta;

export const Template: StoryFn<typeof SideNav> = ({ isActive, ...args }) => (
  <SideNav {...args}>
    <Logo className="w-[250px]" {...args}>
      <Logo.Title className="text-base">IAM(In All Musical)</Logo.Title>
      <Logo.SubTitle className="mb-10 text-sm">
        뮤지컬 통합 스트리밍 서비스
      </Logo.SubTitle>
    </Logo>
    <NavList {...args}>
      <NavItem>로그인</NavItem>
    </NavList>
    <NavList {...args}>
      <NavItem {...args} className={isActive ? 'text-red' : ''}>
        Home
      </NavItem>
      <NavItem>음원(넘버)</NavItem>
      <NavItem>영상</NavItem>
      <NavItem>공연정보</NavItem>
      <NavItem>매거진</NavItem>
    </NavList>
    <NavList {...args}>
      <NavItem>IAM 멤버쉽</NavItem>
      <NavItem>문의하기</NavItem>
    </NavList>
  </SideNav>
);
