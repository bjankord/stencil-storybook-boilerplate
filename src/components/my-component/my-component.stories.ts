/* eslint-disable import/no-extraneous-dependencies */
import { html } from 'lit-html';
import markdown from './readme.md';

export default {
  title: 'Components/My Component',
  component: 'my-component',
  parameters: {
    notes: { markdown },
  },
};

const Template = ({
  first,
  middle,
  last,
}) => html`<my-component first="${first}" middle="${middle}" last="${last}"></my-component>`;

export const Default = Template.bind({});
Default.args = {
  first: 'First',
  middle: 'Middle',
  last: 'Last',
};
Default.argTypes = {
  first: {
    description: 'The first name',
  },
  middle: {
    description: 'The middle name',
  },
  last: {
    description: 'The last name',
  },
};
