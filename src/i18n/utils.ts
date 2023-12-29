import { langUI, routes, defaultLang, landingPage } from './ui';

/**
 * Retrieves the language based on the URL and preferred language.
 * @param {URL} url - The URL object representing the URL.
 * @param {string} preferredLang - The preferred language.
 * @returns {keyof typeof langUI} - The language extracted from the URL or the preferred language.
 */
export function getLanguage(url: URL, preferredLang: string) {
    
    const [, lang] = url.pathname.split('/');

    if (!lang && url.pathname === '/') {
        if (preferredLang in langUI) {
          return preferredLang as keyof typeof langUI;
        }
    }
    else if (lang in langUI) {
      return lang as keyof typeof langUI;
    };

    return defaultLang;
    }

/**
 * Retrieves the route from the given URL.
 * @param {URL} url - The URL object representing the URL.
 * @returns {keyof typeof routes} - The route extracted from the URL.
 */
export function getRouteFromUrl(url: URL) {
    const [, , route] = url.pathname.split('/');
    if (route in routes) {
      return route as keyof typeof routes;
    }
    return landingPage;
}

/**
 * Returns a translation function for the specified language key.
 * @param {keyof typeof langUI[typeof defaultLang]} key - The language key.
 * @returns {string} - The translated string for the given key.
 */
export function useTranslations(lang: keyof typeof langUI) {
    return function t(key: keyof typeof langUI[typeof defaultLang]) {
        return langUI[lang][key] || langUI[defaultLang][key];
    }
}

/**
 * Retrieves the language key based on the user's IP address.
 * @returns {Promise<keyof typeof langUI>} - The language key.
 */
export async function getLangFromIP(): Promise<keyof typeof langUI> {
    const countryLangMap: { [key: string]: keyof typeof langUI } = {
        'US': 'en',
        'ES': 'es',
        'FR': 'fr',
        'SE': 'sv',
    };

    try {
        const response = await fetch('https://ipinfo.io/json?token=eea950ff3eba08');
        const data = await response.json();

        const countryCode = data.country;
        const lang = countryLangMap[countryCode] || defaultLang;
        
        return lang as keyof typeof langUI;
    } catch (error) {
        console.error('Error getting language from IP:', error);
        return defaultLang;
    }
}

