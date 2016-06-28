import 'babel-polyfill';
import { configure, setAddon } from '@kadira/storybook';
import IntlAddon from '../src';

setAddon(IntlAddon);

/**
 * Load all files from example directory having with "-spec" postfix.
 */
const loadStories = () => {
  const load = require.context('../example', true, /-story\.js$/);

  load.keys().forEach(key => {
    load(key);
  });
};

configure(loadStories, module);
