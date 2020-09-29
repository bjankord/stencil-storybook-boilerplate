/* istanbul ignore file */
import markdown from './readme.md';
import {
  attachArgs,
  attachSlots,
  eventsFromDocs,
  propsFromDocs,
  slotsFromDocs,
} from '../../utils/stories.utils';

const componentName = 'my-component' as const;
const props = propsFromDocs(componentName);
const slots = slotsFromDocs(componentName);
const events = eventsFromDocs(componentName);
console.log({...props});
export default {
  title: 'Components/My Component',
  argTypes: {
    ...props,
    ...slots,
    ...events,
  },
  parameters: {
    notes: { markdown },
  }
}

const Template = (args: any) => {
  const component = document.createElement(componentName);
  attachArgs(args, events, component);
  attachSlots(args, slots, component);

  return component;
};

export const Default = Template.bind({});
