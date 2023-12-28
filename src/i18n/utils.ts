import { langUI, pages, defaultLang, defaultPage } from './ui';

export function getLangFromUrl(url: URL, preferredLang: string) {
    
    const [, lang] = url.pathname.split('/');

    if (!lang && url.pathname === '/') {
        if (preferredLang in langUI) return preferredLang as keyof typeof langUI;
    }
    
    if (lang in langUI) return lang as keyof typeof langUI;

    return defaultLang;
    }

export function getPageFromUrl(url: URL) {
    const [, , page] = url.pathname.split('/');
    if (page in pages) return page as keyof typeof pages;
    return defaultPage;
}

export function useTranslations(lang: keyof typeof langUI) {
    return function t(key: keyof typeof langUI[typeof defaultLang]) {
        return langUI[lang][key] || langUI[defaultLang][key];
    }
}

export async function getLangFromIP(): Promise<keyof typeof langUI> {
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

const countryLangMap: { [key: string]: keyof typeof langUI } = {
    'US': 'en',
    'ES': 'es',
    'FR': 'fr',
    'SE': 'sv',
};