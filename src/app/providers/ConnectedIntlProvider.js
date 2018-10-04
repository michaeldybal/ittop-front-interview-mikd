import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_ru from 'react-intl/locale-data/ru';

import messages_en from "../lang/en.json";
import messages_ru from "../lang/ru.json";

let messages = {
  en: messages_en,
  ru: messages_ru,
};

addLocaleData(locale_en);
addLocaleData(locale_ru);

const mapStateToProps = (state) => (
  {locale: state.ui.lang, messages: messages[state.ui.lang]}
)

export default connect(mapStateToProps)(IntlProvider);