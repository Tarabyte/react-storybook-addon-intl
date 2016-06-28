import React, { Component, PropTypes } from 'react';
import { IntlProvider } from 'react-intl';
import LocaleChooser from '../LocaleChooser/LocaleChooser';

const styles = {
  wrapper: {
    position: 'relative',
    top: 0,
    left: 0,
    paddingTop: '30px'
  }
};

export default class Story extends Component {
  static propTypes = {
    render: PropTypes.func.isRequired,
    translations: PropTypes.object.isRequired
  };

  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      locale: 'en'
    };
    this.changeLocale = this.changeLocale.bind(this);
  }

  changeLocale(locale) {
    this.setState({ locale });
  }

  render() {
    const { locale } = this.state;
    const { translations, render } = this.props;

    return (
      <div style={styles.wrapper}>
        <LocaleChooser
          locale={locale}
          locales={Object.keys(translations)}
          onChoose={this.changeLocale}
        />
        <IntlProvider locale={locale} messages={translations[locale]}>
          {render()}
        </IntlProvider>
      </div>
    );
  }
}

