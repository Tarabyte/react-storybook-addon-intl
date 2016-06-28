# React Storybook Intl Addon
A React Storybook i18n addon to see component stories under different locales.

*TODO: insert gif animation here.*

## Usage

> Assuming you have `@kadira/storybook` and `react-intl` installed.

* Install module using npm.

```
npm install --save-dev react-storybook-addon-intl

```
* Add addon inside storybook config file (`./.storybook/config.js`).

```javascript
import { configure, setAddon } from '@kadira/storybook';
import IntlAddon from 'react-storybook-addon-intl';

setAddon(IntlAddon); // set addon

// the rest configuration goes here
const loadStories = () => {
  // tell storybook how to load stories
};

configure(loadStories, module);

```

* Tell stories using `addWithIntl` method.

```javascript
import { storiesOf } from '@kadira/storybook';

// Lets say Button is using react-intl component FormattedMessage
// to display localized caption.
import Button from './Button';

// add locale data for every locale you are going to use
import { addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
addLocaleData(ru);


storiesOf('Button', module)
  .addWithIntl('Localizable Button', () => (<Button />), {
    'ru-RU': { 'button.caption': 'Нажми меня! (ru-RU)' },
    /* ... */
  });

```

> Take a look at [this example](example/Button-story.js) to learn more.

