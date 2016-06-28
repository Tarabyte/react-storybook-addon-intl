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
  .addWithIntl('Localizable Button', () => (<Button action={action('test')} />), {
    'ru-RU': {
      'button.caption': 'Нажми меня! (ru-RU)'
    },
    'de-DE': {
      'button.caption': 'Klick mich (de-DE)'
    },
    'es-ES': {
      'button.caption': 'Haz click en mi (es-ES)'
    }
  });

