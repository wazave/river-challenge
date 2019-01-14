/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line
const enLocaleData = require('react-intl/locale-data/en');
const frLocaleData = require('react-intl/locale-data/fr');
const deLocaleData = require('react-intl/locale-data/de');
const esLocaleData = require('react-intl/locale-data/es');
const itLocaleData = require('react-intl/locale-data/it');
const jaLocaleData = require('react-intl/locale-data/ja');
const koLocaleData = require('react-intl/locale-data/ko');

const enTranslationMessages = require('./translations/en.json');
const frTranslationMessages = require('./translations/fr.json');
const deTranslationMessages = require('./translations/de.json');
const esTranslationMessages = require('./translations/es.json');
const itTranslationMessages = require('./translations/it.json');
const jaTranslationMessages = require('./translations/ja.json');
const koTranslationMessages = require('./translations/ko.json');

addLocaleData(enLocaleData);
addLocaleData(frLocaleData);
addLocaleData(esLocaleData);
addLocaleData(deLocaleData);
addLocaleData(itLocaleData);
addLocaleData(jaLocaleData);
addLocaleData(koLocaleData);

const DEFAULT_LOCALE = 'en';

// prettier-ignore
const appLocales = [
  'en',
  'es',
  'de',
  'fr', 
  'it',
  'ja',
  'ko',
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
  es: formatTranslationMessages('es', esTranslationMessages),
  de: formatTranslationMessages('de', deTranslationMessages),
  it: formatTranslationMessages('it', itTranslationMessages),
  ja: formatTranslationMessages('ja', jaTranslationMessages),
  ko: formatTranslationMessages('ko', koTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
