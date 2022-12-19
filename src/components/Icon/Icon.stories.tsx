import type { Meta, StoryFn } from '@storybook/react';
import { MagnifyingGlassIcon, XCircleIcon } from '@heroicons/react/24/outline';

import { Icon } from './Icon';

const meta = {
  component: Icon,
  title: 'Components/Icon',
  parameters: {
    design: {
      type: 'figma',
      url: 'figmaURL',
    },
  },
} as Meta<typeof Icon>;

export default meta;

export const Search: StoryFn<typeof Icon> = (args) => (
  <Icon {...args} icon={MagnifyingGlassIcon} className="h-6 w-6" />
);

export const Delete: StoryFn<typeof Icon> = (args) => (
  <Icon {...args} icon={XCircleIcon} className="h-6 w-6" />
);
