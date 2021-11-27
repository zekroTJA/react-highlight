import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Highlight } from '../Highlight';

import { Provider } from './Provider';

export default {
  title: 'Provider',
  component: Provider,
  argTypes: {
    color: { control: { type: 'color' } },
    content: { control: { type: 'text' } },
    keywords: { control: { type: 'object' } },
  },
} as ComponentMeta<typeof Provider>;

const Template: ComponentStory<typeof Provider> = (args) => (
  <Provider {...args}>
    <Highlight content="Lorem ipsum dolor sit amet consectetur adipiscing elit." />
    <Highlight content="Doneceleifend metus velit, ut rutrum nunc semperin." />
  </Provider>
);

export const Default = Template.bind({});
Default.args = {
  keywords: ['dolor sit amet', 'test', 'ut rutrum nunc semper', 'nec'],
};
