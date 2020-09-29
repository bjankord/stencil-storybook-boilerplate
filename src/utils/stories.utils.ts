/* istanbul ignore file */

import { JsonDocs } from '@stencil/core/internal';

const docs: JsonDocs = require('../../docs/components');

const valueFromDoc = (doc: string): any => {
  if (doc == null) return doc;

  let value: any = doc.trim();
  value = value.replace(/^('|")/, '').replace(/("|')$/, '');

  if (value === 'false') {
    return false;
  }

  if (value === 'true') {
    return true;
  }

  return value;
};

export const propsFromDocs = (tag: keyof HTMLElementTagNameMap) => {
  // const propsDocs: {
  //   [x: string]: {
  //     description: string;
  //     defaultValue?: any;
  //     type: string;
  //     control?: { type: string; options: Array<string> };
  //   };
  // } = {};

  const propsDocs: {
    [x: string]: {
      name: string
      type?: { name: string, required: boolean },
      defaultValue?: any;
      description: string;
      table?: {
        type: { summary: string },
        defaultValue: { summary: string },
      },
      control?: { type: string; options: Array<string> };
    },
  } = {};

  docs.components
    .find(c => c.tag === tag)
    .props.forEach(p => {
      propsDocs[p.name] = {
        name: p.name,
        type: { name: p.type, required: p.required },
        defaultValue: valueFromDoc(p.default),
        description: p.docs,
        table: {
          type: { summary: p.type },
          defaultValue: { summary: valueFromDoc(p.default)}
        }
      };

      if (p.type.includes('|')) {
        propsDocs[p.name].control = {
          type: 'select',
          options: p.type.split('|').map(type => valueFromDoc(type)),
        };
      }
    });

  return propsDocs;
};

export const slotsFromDocs = (tag: keyof HTMLElementTagNameMap) => {
  const slotsDocs: { [x: string]: { description: string; defaultValue: string; type: string } } = {};

  docs.components
    .find(c => c.tag === tag)
    .slots.forEach(p => {
      slotsDocs[p.name] = { description: p.docs, defaultValue: '', type: 'string' };
    });

  return slotsDocs;
};

export const eventsFromDocs = (tag: keyof HTMLElementTagNameMap) => {
  const eventsDocs: { [x: string]: { action: string; description: string; custom?: boolean } } = {};

  docs.components
    .find(c => c.tag === tag)
    .events.forEach(p => {
      const eventName = `on${p.event[0].toUpperCase()}${p.event.slice(1)}`;
      eventsDocs[eventName] = { action: eventName, description: p.docs };
    });

  return eventsDocs;
};

export const attachArgs = <T>(args: T, events: any, elm: HTMLElement) => {
  Object.keys(args).forEach(key => {
    // eslint-disable-next-line @stencil/strict-boolean-conditions
    if (!key.match(/^on/)) {
      elm[key] = args[key];
    } else if (events[key]) {
      let eventName = key.replace(/^on/, '');
      eventName = `${eventName[0].toLowerCase()}${eventName.slice(1)}`;
      elm.addEventListener(eventName, args[key]);
    } else {
      elm.addEventListener(key.replace(/^on/, '').toLowerCase(), args[key]);
    }
  });
};

export const attachSlots = <T>(args: T, slots: any, elm: HTMLElement) => {
  Object.keys(slots).forEach(slot => {
    if (args[slot]) {
      const slotElm = document.createElement('span');
      slotElm.slot = slot;
      slotElm.innerText = args[slot];

      elm.appendChild(slotElm);
    }
  });
};
