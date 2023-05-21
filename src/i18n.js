import { init, getLocaleFromNavigator, addMessages } from 'svelte-i18n';
import en from './i18n/en.json';
import ro from './i18n/ro.json';

const fallbackLocale = 'en';
const lngs = [fallbackLocale, 'ro'];

addMessages('en', en);
addMessages('ro', ro);

const detectedLocale = getLocaleFromNavigator();

const locale = () => {
  if (lngs.indexOf(detectedLocale) > -1) return detectedLocale;
  if (detectedLocale.indexOf('-') > 0) {
    const foundLng = lngs.find((l) => detectedLocale.indexOf(l + '-') === 0);
    return foundLng;
  }
  return fallbackLocale;
};

init({
  fallbackLocale,
  initialLocale: locale()
});
