import { Meta, StoryObj } from '@storybook/react';
import { CatCard } from './CatCard';

// Meta data for Storybook.
const meta: Meta<typeof CatCard> = {
  title: 'cards/CatCard',
  component: CatCard,
  argTypes: {},
};

export default meta;

// Initialize Story object.
type Story = StoryObj<typeof meta>;

// Story object for Storybook.
export const Template: Story = {
  args: {
    tag: 'Felines',
    title: 'New cat stuff',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci porta non pulvinar neque laoreet.',
    author: 'John',
    time: '2h ago',
  },
};
