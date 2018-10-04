export const LANG_CHANGE = 'LANG_CHANGE';

export const changeLang = (lang) => {
  return {
    type: LANG_CHANGE,
    payload: (lang === "en") ? "ru" : "en"
  };
};
