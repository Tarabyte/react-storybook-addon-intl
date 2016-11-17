import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Label from './Label';
import { addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import es from 'react-intl/locale-data/es';
import de from 'react-intl/locale-data/de';

addLocaleData(ru);
addLocaleData(es);
addLocaleData(de);

const formats = {
  date: {
    medium: {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  }
};

storiesOf('Label', module)
  .addWithIntl('Caption Localization', () => (<Label date={new Date()} />), {
    'ru-RU': {
    },
    'de-DE': {
    },
    'es-ES': {
    }
  }, {
    formats
  })
  .addWithIntl('Initial Locale (de-DE)', () => (<Label date={new Date()} />), {
    'ru-RU': {
    },
    'de-DE': {
    },
    'es-ES': {
    }
  }, {
    initialLocale: 'de-DE',
    formats
  });

