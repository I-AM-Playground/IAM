import type { Meta, StoryFn } from '@storybook/react';

import { NavItem } from './NavItem';

const meta = {
  component: NavItem,
  title: 'Components/NavItem',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
  args: { isActive: true, text: 'Text' },
} as Meta<typeof NavItem>;

export default meta;

export const Template: StoryFn<typeof NavItem> = ({ isActive, ...args }) => (
  <NavItem {...args} className={isActive ? 'text-red' : ''}>
    {args.text}
  </NavItem>
);
