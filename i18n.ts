
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));

export const locales = ['en', 'pt-BR', 'es']; 
export const defaultLocale = 'pt-BR'; 

//na raiz do projeto



