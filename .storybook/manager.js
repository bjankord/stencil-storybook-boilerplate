import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    brandTitle: 'Web Component Library',
    colorSecondary: '#007bc1',
  }),
});
