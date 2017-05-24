import React, { Component, PropTypes } from 'react';
import { IntlProvider } from 'react-intl';
import LocaleChooser from '../LocaleChooser/LocaleChooser';

const styles = {
  wrapper: {
    position: 'relative',
    top: 0,
    left: 0,
    paddingTop: '3.5em'
  },
  item: {
    display: 'block',
    marginBottom: '1em',
    paddingBottom: '1em',
    borderBottom: '1px solid #ccc',
    position: 'relative'
  },
  label: {
    position: 'absolute',
    top: '-0.5em',
    right: '1em',
    opacity: 0.5
  }
};

const withIntl = (locale, messages, cmp) => (
  <IntlProvider locale={locale} messages={messages}>
    {cmp()}
  </IntlProvider>
);

const defaultLocale = 'en';
const allLocales = 'All';
let choosenLocale = null;


export default class Story extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    translations: PropTypes.object.isRequired,
    initialLocale: PropTypes.string
  };

  constructor(props, ctx) {
    super(props, ctx);

    const initialLocale = this.getInitialLocale();

    this.state = {
      locale: initialLocale
    };

    this.changeLocale = this.changeLocale.bind(this);
  }

  getInitialLocale() {
    const { initialLocale } = this.props;
    const availableTranslations = this.getAvailableTranslations();

    // explicitly specified in options
    if (initialLocale && availableTranslations.includes(initialLocale)) {
      return initialLocale;
    }

    // reuse previously choosen locale
    if (choosenLocale && availableTranslations.includes(choosenLocale)) {
      return choosenLocale;
    }

    return allLocales;
  }

  unique(array) {
    return [...new Set(array)];
  }

  getAvailableTranslations() {
    return this.unique([defaultLocale, ...Object.keys(this.props.translations)]);
  }

  changeLocale(locale) {
    choosenLocale = locale; // save choosen locale for later use
    this.setState({ locale });
  }

  render() {
    const { locale } = this.state;
    const { translations, render } = this.props;
    const availableTranslations = this.getAvailableTranslations();

    const locales = [allLocales, ...availableTranslations];

    const doRender = (() => {
      if (locale === allLocales) {
        return () => (
          availableTranslations
            .map(translation => (
              <div style={styles.item} key={translation}>
                <span style={styles.label}>{translation}</span>
                {withIntl(translation, translations[translation], render)}
              </div>)
            )
        );
      }

      return () => withIntl(locale, translations[locale], render);
    })();

    return (
      <div style={styles.wrapper}>
        <LocaleChooser
          locale={locale}
          locales={locales}
          onChoose={this.changeLocale}
        />
        {doRender()}
      </div>
    );
  }
}

