import { Story, Meta } from '@storybook/react'

import { Footer, FooterProps } from './Footer'

export default {
  title: 'Organisms/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<FooterProps>

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const Normal = Template.bind({})
Normal.args = {
  tags: [
    {
      id: '1',
      name: 'AWS',
    },
    {
      id: '2',
      name: 'React',
    },
    {
      id: '3',
      name: 'TypeScript',
    },
    {
      id: '4',
      name: 'iOS',
    },
    {
      id: '5',
      name: 'Web',
    },
    {
      id: '6',
      name: 'Swift',
    },
    {
      id: '7',
      name: 'Golang',
    },
    {
      id: '8',
      name: 'Linux',
    },
    {
      id: '9',
      name: 'Docker',
    },
    {
      id: '10',
      name: 'Laravel',
    },
    {
      id: '11',
      name: 'Vue.js',
    },
    {
      id: '12',
      name: 'Next.js',
    },
    {
      id: '13',
      name: 'Nuxt',
    },
    {
      id: '14',
      name: 'PHP',
    },
  ],
}
