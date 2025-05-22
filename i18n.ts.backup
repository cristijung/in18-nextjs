
import { getRequestConfig } from 'next-intl/server';


const availableLocales = ['en', 'pt-BR', 'es'] as const;
export type Locale = typeof availableLocales[number];
export const locales: readonly Locale[] = availableLocales;
export const defaultLocale: Locale = 'pt-BR';

if (!availableLocales.includes(defaultLocale)) {
  throw new Error(`Default locale "${defaultLocale}" is not in available locales: ${availableLocales.join(', ')}`);
}

export default getRequestConfig(async ({ locale: incomingLocale }: { locale?: string }) => {
  // log para depuração
  console.log(`[i18n.ts - getRequestConfig] Recebido parâmetro locale inicial: "${incomingLocale}"`);
  let targetLocale: Locale;
  // determina o locale a ser usado
  if (incomingLocale && availableLocales.includes(incomingLocale as Locale)) {
    targetLocale = incomingLocale as Locale;
  } else {
    if (incomingLocale) {
      console.warn(`[i18n.ts - getRequestConfig] Locale "${incomingLocale}" inválido ou não suportado. Usando defaultLocale: "${defaultLocale}".`);
    } else {
      console.log(`[i18n.ts - getRequestConfig] Locale inicial não fornecido. Usando defaultLocale: "${defaultLocale}".`);
    }
    targetLocale = defaultLocale;
  }

  try {    
    const messages = (await import(`./messages/${targetLocale}.json`)).default;
    console.log(`[i18n.ts - getRequestConfig] Mensagens para "${targetLocale}" carregadas com sucesso.`);

     return {
      locale: targetLocale, 
      messages,     
    };
  } catch (error) {
    console.error(`[i18n.ts - getRequestConfig] FALHA ao carregar mensagens para locale "${targetLocale}":`, error);
    throw new Error(`Falha ao carregar mensagens para o locale "${targetLocale}". Verifique o caminho e se o arquivo JSON existe. Causa original: ${error}`);
  }
});