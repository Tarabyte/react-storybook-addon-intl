import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from './Button';
import { addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import es from 'react-intl/locale-data/es';
import de from 'react-intl/locale-data/de';

addLocaleData(ru);
addLocaleData(es);
addLocaleData(de);


storiesOf('Button', module)
  .addWithIntl('Caption Localization', () => (<Button action={action('Button clicked')} />), {
    'ru-RU': {
      'button.caption': 'Нажми меня! (ru-RU)'
    },
    'de-DE': {
      'button.caption': 'Klick mich (de-DE)'
    },
    'es-ES': {
      'button.caption': 'Haz click en mi (es-ES)'
    }
  })
  .addWithIntl('Initial Locale (de-DE)', () => (<Button action={action('another test')} />), {
    'ru-RU': {
      'button.caption': 'Нажми меня! (ru-RU)'
    },
    'de-DE': {
      'button.caption': 'Klick mich (de-DE)'
    },
    'es-ES': {
      'button.caption': 'Haz click en mi (es-ES)'
    }
  }, {
    initialLocale: 'de-DE'
  });

