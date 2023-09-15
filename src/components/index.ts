export const getAssets = (path: string) =>
  new URL(`/src/assets/${path}`, import.meta.url).href;
