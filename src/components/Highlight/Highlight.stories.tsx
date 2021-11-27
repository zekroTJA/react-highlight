import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Highlight } from './Highlight';

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {
    color: { control: { type: 'color' } },
    content: { control: { type: 'text' } },
    keywords: { control: { type: 'object' } },
  },
} as ComponentMeta<typeof Highlight>;

const Template: ComponentStory<typeof Highlight> = (args) => (
  <Highlight {...args} />
);

export const Default = Template.bind({});
Default.args = {
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend metus velit, ut rutrum nunc semper in. Curabitur turpis tortor, sagittis nec risus sed, viverra rhoncus turpis. Aliquam mollis elit sit amet tincidunt venenatis. Proin lobortis, dolor at pulvinar tempor, libero quam pretium odio, sollicitudin vehicula ante massa eget risus. Mauris ultrices lorem et nisi porta venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eu tristique turpis. Duis ante dolor, vehicula a enim id, dapibus fermentum urna. Fusce facilisis scelerisque suscipit. In hac habitasse platea dictumst. Nulla ultrices ac ipsum quis elementum. Donec ultricies mattis placerat. Mauris nec viverra urna.',
  keywords: ['dolor sit amet', 'test', 'ut rutrum nunc semper', 'nec'],
};
