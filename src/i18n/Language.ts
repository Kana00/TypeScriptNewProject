// import object of language
import i18next, { InitOptions } from 'i18next';
import I18nextCLILanguageDetector from 'i18next-cli-language-detector';
import en from './Lang_en';



const i18nConfiguration: InitOptions = {
  debug: false,
  resources: { en }
}

i18next
  .use(I18nextCLILanguageDetector)
  .init(i18nConfiguration);

// documentation: https://www.i18next.com/
// find the correct ISO 639-1 codes: https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
