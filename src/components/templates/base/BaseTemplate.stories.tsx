import { Meta, StoryObj } from '@storybook/react';
import { BaseTemplate } from './BaseTemplate';

// Meta data for Storybook.
const meta: Meta<typeof BaseTemplate> = {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
};

export default meta;

// Initialize Story object.
type Story = StoryObj<typeof meta>;

// Story object for Storybook.
export const Template: Story = {
  // render: (args) => {
  //   <BaseTemplate {...args} />;
  // },
  args: {
    sampleTextProps: 'Hey',
  },
};

// // Making the Template stories equal to a base template type and
// // passing in the args to the BaseTemplate component.
// const Template: StoryObj<typeof BaseTemplate> = (args: any) => {
//   <BaseTemplate {...args} />;
// };

// // type Template = StoryObj<typeof BaseTemplate>
// // Name export describes the stories.
// export const Base = Template.bind({});

// Base.args = {
//   ...mockBaseTemplateProps.base,
// } as Props;
