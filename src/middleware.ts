import { defineMiddleware } from "astro:middleware";
import { getLangFromUrl, useTranslations } from "./utils/i18n";

export const onRequest = defineMiddleware(async (context, next) => {
  const lang = getLangFromUrl(context.url);
  const t = useTranslations(lang);

  context.locals.lang = lang;
  context.locals.t = t;

  return next();
});
